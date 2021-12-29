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
      <h2>Bruges</h2>
      <div id="ww_b2318d93" v='1.20' loc='id' a='{"t":"responsive","lang":"en","ids":["wl495"],"cl_bkg":"#FFFFFF00","cl_font":"#000000","cl_cloud":"#d4d4d4","cl_persp":"#2196F3","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"7","sl_sot":"celsius","sl_ics":"one_a","font":"Arial","cl_odd":"#00000000"}'><a href="https://weatherwidget.org/" id="ww_b2318d93_u" target="_blank">Weather widget for website by Weatherwidget.org</a></div><script async src="https://srv2.weatherwidget.org/js/?id=ww_b2318d93"></script>
      <h2>Ghent</h2>
      <div id="ww_c65b9bce" v='1.20' loc='id' a='{"t":"responsive","lang":"en","ids":["wl489"],"cl_bkg":"#FFFFFF00","cl_font":"#000000","cl_cloud":"#d4d4d4","cl_persp":"#2196F3","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"7","sl_sot":"celsius","sl_ics":"one_a","font":"Arial","cl_odd":"#00000000"}'><a href="https://weatherwidget.org/" id="ww_c65b9bce_u" target="_blank">Weather widget for website by Weatherwidget.org</a></div><script async src="https://srv2.weatherwidget.org/js/?id=ww_c65b9bce"></script>
      <h2>Antwerp</h2>
      <div id="ww_d481e4" v='1.20' loc='id' a='{"t":"responsive","lang":"en","ids":["wl485"],"cl_bkg":"#FFFFFF00","cl_font":"#000000","cl_cloud":"#d4d4d4","cl_persp":"#2196F3","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"7","sl_sot":"celsius","sl_ics":"one_a","font":"Arial","cl_odd":"#00000000"}'><a href="https://weatherwidget.org/" id="ww_d481e4_u" target="_blank">Weather widget for website by Weatherwidget.org</a></div><script async src="https://srv2.weatherwidget.org/js/?id=ww_d481e4"></script>
      <h2>Brussels</h2>
      <div id="ww_391dac89" v='1.20' loc='id' a='{"t":"responsive","lang":"en","ids":["wl2538"],"cl_bkg":"#FFFFFF00","cl_font":"#000000","cl_cloud":"#d4d4d4","cl_persp":"#2196F3","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"7","sl_sot":"celsius","sl_ics":"one_a","font":"Arial","cl_odd":"#00000000"}'><a href="https://weatherwidget.org/" id="ww_391dac89_u" target="_blank">Weather widget for website by Weatherwidget.org</a></div><script async src="https://srv2.weatherwidget.org/js/?id=ww_391dac89"></script>
      </main>
      
    </SbEditable>
  )
}


export default Weather