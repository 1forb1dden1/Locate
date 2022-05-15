interface LocationValue {
    altitude: number;
    latitude: number;
    longitude: number;
    photoUri: string;
  }

const initialState : LocationValue = {
  altitude: 0,
  latitude: 0,
  longitude: 0,
  photoUri: "x",
}

function locationReducer( state = initialState, action :any)
{
    if (action.type === "setValue")
       return {
         ...state,
          altitude: action.payload.altitude,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
          photoUri: action.payload.photoUri,
       }
       return state;
}

export default locationReducer;