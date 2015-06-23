FamousFramework.scene('morgan:morgan', {
    behaviors: {
        '#root':{
            'align':[0.5,0.5],
            'mount-point':[0.5,0.5],
            'size': function(btnSizes, padding, columns, colors){
               var width = padding + (btnSizes + padding) * columns
               //var height = padding + (Math.ceil(colors.length/ columns))*(padding+btnSizes)
               var height = 400
                return [width, height]
            },
            'style':{
                'background-color': 'black',
                'perspective': '100px',
                'border-radius':'10px'
            }
        },

        '#icons':{
            '$repeat': function(colors){
              return colors
            },
            'content': function($index, colors){
                return colors[$index]
            },
            'size': function(btnSizes){
              return [btnSizes,btnSizes]
            },
            'position': function($index, padding, columns, btnSizes, initZ, vert){
                 var xPosition = padding + ($index%columns) * (btnSizes + (padding))
                 var yPosition = vert + (Math.floor($index / columns))* (vert+btnSizes) 
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
                'background-color': colors[$index],
                 'text-align':'center'
               }
            }
        }
    },
    states:{
        colors: ['red',  'green', 'blue',  'green', 'blue', 'yellow', 'maroon','blue', 'yellow', 'maroon', 'orange','green', 'blue', 'yellow', 'maroon', 'orange'],
        padding: 20,
        btnSizes: 50, 
        columns: 4,
        initZ: 1,
        vert: 30 

    },
    events:{
        '$lifecycle': {
            'post-load': function($state){
                
                $state.set('initZ', 0, {duration: 3000, curve: 'inOutExpo'})
            }
        }
    },

    tree: `<node id="root">
             <node id="icons">
             </node>
           </node>`
});
