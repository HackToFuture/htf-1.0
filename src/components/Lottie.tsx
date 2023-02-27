import { useEffect } from 'react';

const Lottie = ({ LottieSource, loop, autoplay = true, style = { height: '100%', width: '100%' }}) => {
  useEffect(() => {
    import('@dotlottie/player-component')
  }, [])

  return (<div className="App">
  <dotlottie-player
    src={LottieSource}
    autoplay={autoplay}
    loop={loop}
    style={style}
  />
</div>
  )
};
  
export default Lottie;
