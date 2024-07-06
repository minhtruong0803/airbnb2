import React, { Component } from 'react'

export default class FormValidation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                id: "",
                username: "",
                fullname: "",
                phone: "",
                email: "",
            },
            errors: {
                id: "",
                username: "",
                fullname: "",
                phone: "",
                email: "",
            }
        };
    }


    handleOnChange = (event) => {
        const { name, value } = event.target;
        const newValues = { ...this.state.values, [name]: value };
        let newErrors = {...this.state.errors};
        if(!value.trim()){      //trim(): xoá khoảng cách 
            /**
             * {id:"", username: "",...}
             * name = "id"
             * newErrors.id = "Vui lòng nhập thông tin"
             */
            newErrors[name] = "Vui lòng nhập thông tin";
        } else{
            if(pattern){
                // xử lý pattern có hợp lệ hay kh
                const regex = new RegExp(pattern);
                const valid = regex.test(value); //đúng format: true, sai format: false
                if(valid){

                }else {
                    newErrors ="";
                }
                console.log("valid", name, valid);
            }
            newErrors[name] = "";
        }
        this.setState({ values: newValues, errors: newErrors });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        //Kiểm tra this.state.values có giá trị hay kh
        //Nếu có lỗi thì kh cho gửi dữ liệu đi
        let isValid = true;
        // 
        console.log("values", this.state.values);
    };

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="container mt-5 mb-5 d-flex justify-content-center">
                    <form onSubmit={this.handleSubmit}>
                        <div className="card px-1 py-4">
                            <div className="card-body">
                                <h6 className="card-title mb-3">Users Managements</h6>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            {/* <label for="name">Name</label> */}
                                            <input className="form-control"
                                                type="text" 
                                                placeholder="ID"
                                                name="id" 
                                                onChange={this.handleOnChange}
                                                onBlur={this.handleOnChange} />
                                            {errors.id && (
                                                <span className="text text-danger">{errors.id}</span>
                                            )}

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            {/* <label for="name">Name</label> */}
                                            <input className="form-control"
                                                type="text" 
                                                placeholder="Username"
                                                name="username" 
                                                onChange={this.handleOnChange}
                                                onBlur={this.handleOnChange} />
                                            {errors.username && (
                                                <span className="text text-danger">{errors.username}</span>
                                            )}

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            {/* <label for="name">Name</label> */}
                                            <input className="form-control"
                                                type="text" 
                                                placeholder="Fullname"
                                                name="fullname" 
                                                onChange={this.handleOnChange} 
                                                onBlur={this.handleOnChange}/>
                                            {errors.fullname && (
                                                <span className="text text-danger">{errors.fullname}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input className="form-control"
                                                    type="text" 
                                                    placeholder="Phone Number"
                                                    name="phonenumber" 
                                                    onChange={this.handleOnChange} 
                                                    onBlur={this.handleOnChange}
                                                    pattern="^(03|05|07|08|09)\d{8}$"/>
                                                {errors.phone && (
                                                    <span className="text text-danger">{errors.phone}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input className="form-control"
                                                    type="text" placeholder="Email"
                                                    name="email" 
                                                    onChange={this.handleOnChange} 
                                                    onBlur={this.handleOnChange}/>
                                                 {errors.email && (
                                                <span className="text text-danger">{errors.email}</span>
                                            )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column text-center px-5 mt-3 mb-3">
                                    <small className="agree-text">By Booking this appointment you agree to the</small>
                                    <a href="#" className="terms">Terms &amp; Conditions</a>
                                </div>
                                <button className="btn btn-primary btn-block confirm-button">
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}
