export const LoginStart =(userCredentials)=>({
    type:"LOGIN_START"
})

export const LoginSuccess=(user)=>({
    type:'LOGIN_SUCCESS',
    payload:user
})
export const LoginFailure=()=>({
    type:'LOGIN_FAILURE',
})
export const LOGOUT=()=>({
    type:'LOGOUT',
})
//update is also as context to show changes all over the website:
export const UpdateStart =(userCredentials)=>({
    type:"UPDATE_START"
})

export const UpdateSuccess=(user)=>({
    type:'UPDTAE_SUCCESS',
    payload:user
})
export const UpdateFailure=()=>({
    type:'UPDTAE_FAILURE',
})

