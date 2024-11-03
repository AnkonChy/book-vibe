import { toast } from "react-toastify";

const getStoredReadList = () => {
  //read-list
  //normarlly list gula string akare pabo
  const storedListStr = localStorage.getItem("read-list");
  //check korbo read-list means storedListStr ache kina
  if (storedListStr) {
    //string akare pelei hobena parse korte hobe
    const storedReadList = JSON.parse(storedListStr);
    return storedReadList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  //list e current kiki boi ache seta anbo getStoredReadList
  const storedList = getStoredReadList();

  //check korbo jeda add korte chachhi seta already exist kina
  if (storedList.includes(id)) {
    //already exist
    console.log(id, "already exists in the read list");
  } else {
    storedList.push(id);
    //new item ke set korte hobe jar jonno stringify korlam and setItem korlam
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
  }
};

const getStoredWishList = () => {
  //wish-list
  //normally wish list ta string akare pabo
  const storedWishStr = localStorage.getItem("wish-list");
  if (storedWishStr) {
    const storedWishList = JSON.parse(storedWishStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  //already jegula list e ache segula nilam
  const storedWish = getStoredWishList();
  console.log(typeof storedWish);
  //check korte hobe new id jeta ashbe seta already list e exist kore kina
  if (storedWish.includes(id)) {
    //already exist
    console.log(id, "already exists in the wish list");
  } else {
    storedWish.push(id);
    //only push krle hbena etake stringify kore abr setItem krte hbe
    const newStoredWishStr = JSON.stringify(newStoredWishStr);
    localStorage.setItem("wish-list", newStoredWishStr);
  }
};

export { addToStoredReadList, addToStoredWishList, getStoredReadList };
