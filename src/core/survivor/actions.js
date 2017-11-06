import axios from "axios";
import {
  GET_SURVIVOR,
  CREATE_SURVIVOR,
  SET_SURVIVAL,
  SET_BLEEDING,
  SET_ATTRIBUTES,
  SET_MANY_ARMOR,
  SET_MANY_ATTRIBUTES,
  SET_MANY_ASSETS,
} from "./constants";

const KDM_API = `${process.env.REACT_APP_API_URL}`

const getSurvivorAsync = (data) => {
  return {
    type: GET_SURVIVOR,
    payload: data.sheet
  };
}

const createSurvivorAsync = (data) => {
  return {
    type: CREATE_SURVIVOR,
    payload: data.sheet
  };
}

export const getSurvivor = () => {
  return dispatch => {
    axios({
      method: "post",
      url: `${KDM_API}/survivor/get/5827ae438740d92d907d1d3d`
    }).then(res => {
      console.log("SURVIVOR", res);
      dispatch(getSurvivorAsync(res.data));
    });
  };
}

export const createSurvivor = (settlementId, data) => {
  let auth = localStorage.getItem("access_token");
  let userId = localStorage.getItem("userId");
  return axios({
    method: "post",
    url: `${KDM_API}/new/survivor`,
    data: {
      user_id: userId,
      settlement: settlementId,
      name: data.name,
      sex: data.gender
    }
  });
}

export const setAttributes = (survivor_id, data) => {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/set_attribute/${survivor_id}`,
      data: data
    })
      .then(res => {
        dispatch(setAttributesAsync(data, survivor_id));
        return true;
      })
      .catch(error => {
        console.warn("actions error", error);
        return false;
      });
  };
}

export const setManyArmor = (survivor_id, data) => {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/set_many_attributes/${survivor_id}`,
      data: data
    })
      .then(res => {
        dispatch(setManyArmorAsync(data, survivor_id));
        return true;
      })
      .catch(error => {
        console.warn("actions error", error);
        return false;
      });
  };
}

export const setManyAttributes = (survivor_id, data) => {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/set_many_attributes/${survivor_id}`,
      data: data
    })
      .then(res => {
        dispatch(setManyAttributesAsync(data, survivor_id));
        return true;
      })
      .catch(error => {
        console.warn("actions error", error);
        return false;
      });
  };
}

export const setSurvival = (survivor_id, data) => {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/set_survival/${survivor_id}`,
      data: data
    })
      .then(res => {
        // console.log("res survival", res);
        dispatch(setSurvivalAsync(data, survivor_id));
        return true;
      })
      .catch(error => {
        console.warn("actions error", error);
        return false;
      });
  };
}

export const setBleeding = (survivor_id, data) => {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/set_bleeding_tokens/${survivor_id}`,
      data: data
    })
      .then(res => {
        // console.log("res bleeding", res);
        dispatch(setBleedingAsync(data, survivor_id));
        return true;
      })
      .catch(error => {
        console.warn("actions error", error);
        return false;
      });
  };
}

const setManyArmorAsync = (data, survivor_id) => ({
  survivor_id,
  type: SET_MANY_ARMOR,
  payload: data
})

const setManyAttributesAsync = (data, survivor_id) => ({
  survivor_id,
  type: SET_MANY_ATTRIBUTES,
  payload: data
})

const setAttributesAsync = (data, survivor_id) => ({
  survivor_id,
  type: SET_ATTRIBUTES,
  payload: data
})

const setSurvivalAsync = (data, survivor_id) => ({
  survivor_id,
  type: SET_SURVIVAL,
  payload: data
})

const setBleedingAsync = (data, survivor_id) => ({
  survivor_id,
  type: SET_BLEEDING,
  payload: data
})

export const setAssets = (survivor_id, data) => {
  return axios({
    method: "post",
    url: `${KDM_API}/survivor/add_game_asset/${survivor_id}`,
    data: data
  });
}

export const setManyAssets = (survivor_id, data) => {
  return async dispatch => {
    await axios({
      method: "post",
      url: `${KDM_API}/survivor/replace_game_assets/${survivor_id}`,
      data: data
    }).then(res => {
      console.log("assets", res);
      dispatch(setManyAssetsAsync(res.data, survivor_id));
      return true;
    });
  };
}

const setManyAssetsAsync = (data, survivor_id) => ({
  survivor_id,
  type: SET_MANY_ASSETS,
  payload: data
})
