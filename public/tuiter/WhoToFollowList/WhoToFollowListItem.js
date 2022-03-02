const WhoToFollowListItem = (who) => {
     return(`
         <li class="list-group-item p-0 m-0 ps-3 pe-3">
             <div class="row mt-2">
                 <div class="col-2 mt-auto mb-auto p-1">
                     <img src= ${who.avatarIcon} class="img-fluid rounded-circle" style="width: 48px; height: 48px">
                 </div>
                 <div class="col-6 m-0 ps-1">
                     <p class="fw-bold m-0 p-0">${who.userName}<i class="fas fa-check-circle ms-2"></i></p>
                     <p class="m-0 p-0">@${who.handle}</p>
                 </div>
                 <div class="col-4">
                      <button class="btn btn-primary rounded-pill">Follow
                     </button>
             </div>
         </li>
     `);
 }
 export default WhoToFollowListItem;