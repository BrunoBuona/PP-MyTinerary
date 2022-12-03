import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../../redux/actions/reactionActions";

export default function Reaction(props) {
    let { idTinerary } = props;
    let userData = useSelector((state) => state.loginReducer);
    let { id } = userData?.token;
    console.log(id);
    let dispatch = useDispatch();

  const { getReactions, updateReaction } = reactionsActions;
  const [reaction, setReaction] = useState([]);
  const [reload, setReload] = useState(true);

  async function changeIcon(event) {
    let name;
    
    reaction.data.forEach((e) => {
      if (e.name === event.target.name) {
        name = e.name;
      }
    });
    try {
      let date = {
        name,
        id: idTinerary
      }
      await dispatch(updateReaction(date));
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }console.log(name);
  }



  useEffect(() => {
    reactions();
    // eslint-disable-next-line 
  }, [reload]);

  async function reactions() {
    let res = await dispatch(getReactions(idTinerary))
    setReaction(res.payload)
    console.log(res);
  }

  console.log(reaction)
  return (
    <>
      {reaction.success &&
        reaction.data.map((e) => {
          let res = e.userId.find((user)=> user._id === id)
          return (
            res ? (
            <><img
              src={e.iconBack}
              alt={e.name}
              name={e.name}
              className=""
              width="50px"
              onClick={changeIcon}
            />
            
            </>) : (
              <>
              <img
              src={e.icon}
              alt={e.name}
              name={e.name}
              className=""
              width="50px"
              onClick={changeIcon}
            />
            </>
            )
          )
        })}
    </>
  )
}