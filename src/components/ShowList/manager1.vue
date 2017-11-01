<template>
    <div class="container">
        <h3>QUẢN LÝ NGƯỜI DÙNG V-model Vuex</h3>
        <div class="row">
            <div class="col-md-12">
            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#createUserModal">
                <span class="glyphicon glyphicon-plus"></span> Thêm người dùng
            </button>
            </div>
        </div>
        <!-- createUserModal -->
        <div class="modal fade" id="createUserModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">THÊM NGƯỜI DÙNG</h4>
                </div>
                <div class="modal-body">
                <div class="row">
                    <div class="form-group">
                    <label class="col-sm-2 control-label">Họ và tên</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="create_name" placeholder="Họ và tên">
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                    <label class="col-sm-2 control-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control"  v-model="create_email"  placeholder="Địa chỉ email">
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                    <label class="col-sm-2 control-label">Địa chỉ</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control"  v-model=" create_address" placeholder="Địa chỉ">
                    </div>
                    </div>
                </div>  
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Hủy bỏ</button>
                <button type="button" class="btn btn-success" @click="createUser()">Thêm user</button>
                </div>
            </div>
            </div>
        </div>
        <!-- /createUserModal -->
        <!-- updateUserModal -->
        <div class="modal fade" id="updateUserModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">CHỈNH SỬA THÔNG TIN NGƯỜI DÙNG</h4>
                </div>
                <div class="modal-body">
                <div class="row">
                    <div class="form-group">
                    <label class="col-sm-2 control-label">Họ và tên</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model=" edit_name" placeholder="Họ và tên">
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                    <label class="col-sm-2 control-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" v-model=" edit_email" placeholder="Địa chỉ email">
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                    <label class="col-sm-2 control-label">Địa chỉ</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model=" edit_address" placeholder="Địa chỉ">
                    </div>
                    </div>
                </div>  
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                <button type="button" class="btn btn-success" @click="updateUser()">Cập nhật</button>
                </div>
            </div>
            </div>
        </div>
        <!-- /updateUserModal -->
        <table class="table table-hover">
            <thead>
            <tr>
                <th>UserID</th>
                <th>Họ và tên</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users">
                <td v-text="user.id"></td>
                <td v-text="user.name"></td>
                <td v-text="user.email"></td>
                <td v-text="user.address"></td>
                <td>
                
                <button class="btn btn-primary" @click="showUpdateUserModal(user.id)">
                    <span class="glyphicon glyphicon-pencil"></span> Chỉnh sửa
                </button>
                <button class="btn btn-danger" @click="deleteUser(user.id)">
                    <span class="glyphicon glyphicon-remove"></span> Xóa
                </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>


<script src="./manager.js"></script>