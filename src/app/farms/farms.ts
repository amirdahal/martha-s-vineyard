import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
    
  })
export class Farms {
    farmData = [
        { 
            name: 'Allen Farm', slug: '32-allen-farm', size: '22.5 acres',
            description: 'One of the Vineyard’s most striking and well-known scenic vistas is the Allen Farm sheep pasture on the Chilmark Upper Pond. Visible is the pond, plus the moorland knoll overlooking the Lucy Vincent Beach and the Atlantic Ocean. The entire length of the Chilmark part of the South Road once looked just like Allen Farm — development and brushy overgrowth have now eliminated the other fields and pastures — so the purchase of the development rights here preserved not only seaside farmland but a sense of history.',
            uses: 'Farming, scenic vista', access: 'Follow the South Road from the Beetlebung Corner in the direction of West Tisbury; automobile turnout is located 0.8 miles up the road on the right.',
            propertymap: 'http://mvlandbank.com/documents/websitemap22---AllenFarm.pdf',
            features: '23allenfarm.gif', image: [{ img: '23allenfarm.jpg'}]
        },
        // { 
        //     name: '', slug: '', size: '',
        //     description: '', uses: '', access: '', propertymap: '',
        //     features: '', image: []
        // },
        // { 
        //     name: '', slug: '', size: '',
        //     description: '', uses: '', access: '', propertymap: '',
        //     features: '', image: []
        // },
        // { 
        //     name: '', slug: '', size: '',
        //     description: '', uses: '', access: '', propertymap: '',
        //     features: '', image: []
        // }
    ]
}