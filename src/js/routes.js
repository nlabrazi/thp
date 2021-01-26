console.log("duno");

const MyRoute = () => {

console.log("before route");

  let pageArgument;

  const setRoute = () => {
    let path = window.location.hash.substring(1).split("/");
    console.log("path " + path);
    pageArgument = path[1] || "";

    var pageContent = document.getElementById("pageContent");
    routes[path[0]](pageArgument);
    return true;
  };

  window.addEventListener("hashchange", () => setRoute());
  window.addEventListener("DOMContentLoaded", () => setRoute());

  const routes = {
    "": PageList,
    "pagelist": PageList,
    "pagedetail": PageDetail,
  };

};

export { MyRoute };
