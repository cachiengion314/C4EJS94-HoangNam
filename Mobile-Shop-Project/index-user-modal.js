// user modal
let userModal = document.getElementById(`modal_user`);
let sideIcon = document.getElementById(`side_icon_img`);
let userBlockInfo = document.getElementById(`modal_user_block_info`);
let containerUser = document.getElementById(`modal_container_user`);

function loadUserStatus() {
    let users = getUsersArray();
    userModal.style.display = `block`;
    userBlockInfo.innerHTML = ``;
    for (let i = 0; i < users.length; i++) {
        userBlockInfo.insertAdjacentHTML(`beforeend`, `
        <!-- one user start  -->
        <div class="slice_bar"></div>
        <div class="space"></div>
        <div class="modal_user_block">
            <div class="user">
                <img id="modal_user_bagImg" src="./images/avatar_2.png" alt="">
                <div class="user_name">${users[i].user_name}</div>
            </div>
            <div class="user_password">${users[i].password}</div>
            <div id="products_choices_${i}" class="products_choices">
               
            </div>
            <div class="delete_account">
                <button id="delete_button_${i}" class="delete_button">Xoá</button>
            </div>
        </div>
        <div class="space"></div>
        <!-- one user end  -->
        `);
        if (users[i].product_choices.length > 0) {
            for (let ii = 0; ii < users[i].product_choices.length; ii++) {
                document.getElementById(`products_choices_${i}`).insertAdjacentHTML(`beforeend`, `
                ${users[i].product_choices[ii].product_name},
            `);
            }
        } else {
            document.getElementById(`products_choices_${i}`).insertAdjacentHTML(`beforeend`, `
                Đã mua hoặc chưa chọn sản phẩm nào
            `);
        }
        document.getElementById(`delete_button_${i}`).onclick = () => {
            if (i != 0) {
                removeUserInUsersArrayAt(i);
                loadUserStatus();
            } else {
                notificationPopUp(`Bạn không có quyền xoá admin`, sadImageUrl);
            }
        }
    }
    document.getElementById(`modal_user_ok_button`).onclick = () => {
        userModal.style.display = `none`;
    };
}

function openUserModal() {
    if (getUserSignInIndex() == 0) {
        loadUserStatus();
    } else {
        notificationPopUp(`Bạn cần có quyền admin`, sadImageUrl);
    }

}
sideIcon.onclick = openUserModal;