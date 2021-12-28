import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Movie.module.scss"
import { getData } from "../utils/storyblok"

const Weather = ({ data, level }) => {
    var locale = 'en';
    //enriching data
    if (level === 'data') {
      locale = data.story.lang;
      var content = data.story.content;
      var directors = data.rels.filter(obj => {
        return content.directors.includes(obj.uuid);
      });
      var stars = data.rels.filter(obj => {
        return content.stars.includes(obj.uuid);
      });
      var writers = data.rels.filter(obj => {
        return content.writers.includes(obj.uuid);
      })
      var studios = data.rels.filter(obj => {
        return content.studios.includes(obj.uuid);
      })
      var genres = data.rels.filter(obj => {
        return content.genres.includes(obj.uuid);
      })
      if(content.agerating){
           var agerating = data.rels.filter(obj => {
             return content.agerating.includes(obj.uuid);
           });
        }
    } else {
      var content = data;
    }
  
    const [products, setProducts] = useState([]);
    getData(data.story.uuid, locale, content.preview = false, 'product', 'weather').then(
      function (result) {
        setProducts(result.data.stories);
      });
  
    const [newsitems, setNewsitems] = useState([]);
    getData(data.story.uuid, locale, content.preview = false, 'newsitem', 'weather').then(
      function (result) {
        setNewsitems(result.data.stories);
      });
  
    var pictures = content.pictures;
  
    //returning the HTML
    return (
      <SbEditable content={content} key={content._uid}>
       <head>
           <h2>Ghent</h2>
       </head>
        
      </SbEditable>
    )
  }
  
  export default Weather
  