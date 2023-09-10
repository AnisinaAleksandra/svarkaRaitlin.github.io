
import { Map, Placemark, YMaps, ZoomControl } from '@pbe/react-yandex-maps'
import style from './MapY.module.scss'


export const MapY= () => {
    return(
        <div className={style.Map} id='map'>
        <YMaps>
        <Map width='100%'
        height='400px'
        defaultState={{ 
        center: [54.818569, 82.866773],
        zoom: 14,
        controls: [],
        }} >
            <Placemark geometry={[54.818569, 82.866773]} />
            <ZoomControl options={{ position: {top:'20px',left:'5px'} }} />
            </Map>
             </YMaps>

    </div>
    ) 
}
