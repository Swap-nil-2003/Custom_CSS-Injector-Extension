//Obtain the URL
const site = window.location.hostname;

//alert("Injector - The JavaScript has been injected to: " + site);

//Add Custom CSS styles

const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML=css;

//Create Custom element function
function Create_Custom_Element(tag,attr_tag, attr_name,value)
{
    const custom_element = document.createElement(tag);
    custom_element.setAttribute(attr_tag,attr_name);
    custom_element.innerHTML=value;
    document.body.append(custom_element);
}

//JS codes for youtube.com
if(site.includes("youtube.com")){
    Add_Custom_Style(`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&display=swap');

    * {
    font-family:'Baloo Bhai 2', cursive;
    color: #00ff40 !important;
    }

    ytd-channel-about-metadata-renderer {
    zoom: 1.5;
    }

    #meta.ytd-c4-tabbed-header-renderer {
        zoom: 1.1;
    }
    #js-custom-element {
        font-size: 60px;
        padding: 150px 0;
        color: #ff0037 !important;
        background-color: #fffffff2;
        position: fixed;
        top: 0;
        text-align: center;
        width: 100%;
        z-index: 999999;
    }

    .js-custom-element {
        font-size: 60px;
        padding: 150px 0;
        color: #008dff !important;
        background-color: #fffffff2;
        position: fixed;
        bottom: 0;
        text-align: center;
        width: 100%;
        z-index: 999999;
    }
`);
}

//JS codes for google.com
if(site.includes("google.com")){
    Add_Custom_Style(`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&display=swap');

    *{
    font-family:'Baloo Bhai 2', cursive;
    color: #00ff40 !important;
    }

    ytd-channel-about-metadata-renderer {
        zoom: 1.6;
    }

    #meta.ytd-c4-tabbed-header-renderer {
        zoom: 1.3;
    }

    #js-custom-element {
        font-size: 60px;
        padding: 150px 0;
        color: #ff0037 !important;
        background-color: #fffffff2;
        position: fixed;
        top: 0;
        text-align: center;
        width: 100%;
        z-index: 999999;
    }

    .js-custom-element {
        font-size: 60px;
        padding: 150px 0;
        color: #008dff !important;
        background-color: #fffffff2;
        position: fixed;
        bottom: 0;
        text-align: center;
        width: 100%;
        z-index: 999999;
    }
`);

//Custom element in JS for any webpage
 // Create_Custom_Element(
    //     "div",
    //     "id",
    //     "js-custom-element",
    //     "My Custom JS Element 1"
    // )
    // Create_Custom_Element(
    //     "div",
    //     "class",
    //     "js-custom-element",
    //     "My Custom JS Element 2"
    // )

}

//JS codes for microsoft.com
if(site.includes("microsoft.com")){
    Add_Custom_Style(`
    *{
        filter: invert(1) !important;
    }
    `)
}
/*JS codes for heritageit.edu
if(site.includes("heritageit.edu")){
    Add_Custom_Style(`
    *{
        filter: invert(1) !important;
    }
    `)
}*/
