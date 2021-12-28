import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Weather = ({ data, level }) => {
  if(level==='data'){
    var content = data.story.content;
  } else {
    var content = data;
  }
  if(data.story&&data.story.lang){
    var lang = data.story.lang;
  } else {
    var lang = 'default';
  }
  return (
    <SbEditable content={content}>
      <main>
        {content.weerbody ? content.weerbody.map((content) =>
          <DynamicComponent data={content} key={content._uid} locale={lang} />
        ) : null}
       {/* <hier komt de widget> */}
      </main>
    </SbEditable>
  )
}


export default Weather