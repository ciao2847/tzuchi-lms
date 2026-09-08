import { combineReducers } from 'redux'
import headerTheme from './style/headerThemeSlice'
import fruitsData from './fruitsSlice'
import fruitSliceReduxVer from './fruitSliceReduxVer'
/* import promotionsData from './promotionsSlice'
import ticketsData from './ticketsSlice'
import toursData from './toursSlice'
import publicationsData from './publicationsSlice'
import socialMediasData from './socialMediasSlice'
import toursData from './toursSlice'
import eventsData from './eventsSlice'
import attractionsData from './attractionsSlice' */

const reducers = combineReducers({
    headerTheme,
    fruitsData,
    fruitSliceReduxVer
    /* promotionsData,
    ticketsData,
    toursData,
    socialMediasData,
    publicationsData
    toursData,
    eventsData,
    attractionsData
    newsData,
    photoSwipeData,
    socialMediasData,
    galleriesData,
    regionsData,
    collectionData,
    dayListData,
    tourismBrandData,
    shopsData,
    otaData,
    publicationsData,
    themesData,
    tipsData,
    columnsData,
    marchesData */
})

export default reducers
