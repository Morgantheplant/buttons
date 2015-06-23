FamousFramework.scene('morgan:morgan', {
    behaviors: {
        '#root':{
            'align':[0.5,0.5],
            'mount-point':[0.5,0.5],
            'size': function(btnSizes, padding, columns, colors){
               var width = padding + (btnSizes + padding) * columns
               //var height = padding + (Math.ceil(colors.length/ columns))*(padding+btnSizes)
               var height = 500
                return [width, height]
            },
            'style':{
                'background-image': `url(apple.jpg)`,
                'perspective': '100px',
                'border-radius':'10px',
                'background-size':'cover',
                'box-shadow':'0px 0px 5px black'
            }
        },

        '#icons':{
            '$repeat': function(colors){
              return colors
            },
            'content': function($index, colors){

                var newt = ($index===3)? 'orange' : colors[$index];
                return `<div style="margin-top:56px">${newt}</div>`
            },
            'size': function(btnSizes){
              return [btnSizes,btnSizes]
            },
            'position': function($index, padding, columns, btnSizes, initZ, vert){
                 var xPosition = padding + ($index%columns) * (btnSizes + (padding))
                 var yPosition = padding + (Math.floor($index / columns))* (vert+btnSizes) 
                 var zPosition;
                 if($index%columns===3||$index%columns===0){
                    zPosition = initZ*400
                 }
                 if($index%columns===2||$index%columns===1){
                    zPosition = initZ*200
                    if(Math.ceil($index / columns)===1||Math.ceil($index / columns)===4){
                      zPosition += initZ*80
                    }
                 }
                 
            

                return [xPosition, yPosition, zPosition]
            },
            'style': function($index, colors, btnSizes){
                return {
                'border-radius': '10px',
                'background': colors[$index],
                 'text-align':'center',
                 'color': 'white',
                 'font-size':'10px',
               }
            }
        }
    },
    states:{
        colors: ['red',  'green', 'yellow',  'linear-gradient(red, #f06d06)', 'blue', 'aqua', 'maroon','orange', 'teal', 'deeppink', 'lightskyblue','maroon', 'orangered', 'yellowgreen', 'navy', 'gold'],
        padding: 20,
        btnSizes: 50, 
        columns: 4,
        initZ: 1,
        vert: 35 

    },
    events:{
        '$lifecycle': {
            'post-load': function($state){
                
                $state.set('initZ', 0, {duration: 2500, curve: 'inOutExpo'})
            }
        }
    },

    tree: `<node id="root">
             <node id="icons">
             </node>
           </node>`
});
