//constante
const dataInicial ={
    project:[],
    numeroID:null,
    filtrado:[]
}

//se coloca el nombre de accion en mayuscula
//types
const ACTUALIZAR_PROJECT = 'ACTUALIZAR_PROJECT'
const AGREGAR_AL_PROJECT = 'AGREGAR_AL_PROJECT'
const AGREGAR_AL_NUMEROID = 'AGREGAR_AL_NUMEROID'
const AGREGAR_AL_FILTRADO = 'AGREGAR_AL_FILTRADO'
//reducer
export default function estadisticaReducer(state = dataInicial,action){

    switch (action.type) {
        case ACTUALIZAR_PROJECT:
                return {...state,project: action.payload}
        case AGREGAR_AL_PROJECT:
                return {...state,project:[...state.project,action.payload]}
        case AGREGAR_AL_NUMEROID:
                return {...state,numeroID: action.payload}
        case AGREGAR_AL_FILTRADO:
                return {...state,filtrado: action.payload}
        default:
            return state
    }
}

//acciones


export const actualizarPROJECTAction = (status) =>  (dispatch, getState) => {
    // console.log(getState().EstadisticaArray.prueba)
        dispatch({
            type: ACTUALIZAR_PROJECT,
            payload: status
        })

}
export const actualizarFiltradoAction = (status) =>  (dispatch, getState) => {
    // console.log(getState().EstadisticaArray.prueba)
        dispatch({
            type: AGREGAR_AL_FILTRADO,
            payload: status
        })

}
export const actualizarNumeroIdAction = (status) =>  (dispatch, getState) => {
    // console.log(getState().EstadisticaArray.prueba)
        dispatch({
            type: AGREGAR_AL_NUMEROID,
            payload: status
        })

}
export const agregarAlPROJECTAction = (status) =>  (dispatch, getState) => {
    // console.log(getState().EstadisticaArray.prueba)
        dispatch({
            type: AGREGAR_AL_PROJECT,
            payload: status
        })

}


