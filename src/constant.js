export const shapeItemColor = "#d6d6d6";

const SHAPES = {

    'triangle' : <path d="M50,10 L90,90 L10,90 Z" />

    ,'circle' : <circle cx="50" cy="50" r="40"></circle>
                
    ,'square' : <rect x="10" y="10" width="80" height="80"></rect>
                
    ,'pentagon' : <path d="M50,10 L90,35 L75,80 L25,80 L10,35 Z"></path>
                
    ,'hexagon' : <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z"></path>
                
};

export const shapes = [
    [
        {
            'name' : 'demographic',
            'shape':SHAPES['triangle'],
        },
        {
            'name' : 'development',
            'shape':SHAPES['square'],
        },
        {
            'name' : 'origins',
            'shape':SHAPES['circle'],
        },
        {
            'name' : 'services',
            'shape':SHAPES['pentagon'],
        },
        {
            'name' : 'tolerance',
            'shape':SHAPES['hexagon'],
        },
        {
            'name' : 'size',
            'shape':SHAPES['circle'],
        }
    ],
    [
        {
            'name' : 'energy',
            'shape':SHAPES['triangle'],
        },
        {
            'name' : 'resolution',
            'shape':SHAPES['hexagon'],
        },
        {
            'name' : 'pros',
            'shape':SHAPES['triangle'],
        },
        {
            'name' : 'cons',
            'shape':SHAPES['circle'],
        },
        {
            'name' : 'future',
            'shape':SHAPES['pentagon'],
        },
        {
            'name' : 'privacy',
            'shape':SHAPES['triangle'],
        },
        {
            'name' : 'cooking',
            'shape':SHAPES['hexagon'],
        },
    ]

]

export const randomColor =   ["#00ffaa", "#0095ff","#a6ff00", "#00ffd5", "#00ff2f", "#bbff00"];

export const backURL = "https://momunity-draft.web.app/";