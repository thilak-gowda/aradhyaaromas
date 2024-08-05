import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, message, Alert } from 'antd';
import { useDispatch } from "react-redux";

const availableLocation = [
    { pincode: "1", Address: "Mumbai", latitude: 19.0760, longitude: 72.8777 },
    { pincode: "2", Address: "Delhi", latitude: 28.7041, longitude: 77.1025 },
    { pincode: "3", Address: "Bangalore (Bengaluru)", latitude: 12.9716, longitude: 77.5946 },
    { pincode: "4", Address: "Hyderabad", latitude: 17.3850, longitude: 78.4867 },
    { pincode: "5", Address: "Chennai", latitude: 13.0827, longitude: 80.2707 },
    { pincode: "6", Address: "Kolkata", latitude: 22.5726, longitude: 88.3639 },
    { pincode: "7", Address: "Pune", latitude: 18.5204, longitude: 73.8567 },
    { pincode: "8", Address: "Ahmedabad", latitude: 23.0225, longitude: 72.5714 },
    { pincode: "9", Address: "Surat", latitude: 21.1702, longitude: 72.8311 },
    { pincode: "10", Address: "Jaipur", latitude: 26.9124, longitude: 75.7873 },
    { pincode: "11", Address: "Lucknow", latitude: 26.8467, longitude: 80.9462 },
    { pincode: "12", Address: "Kanpur", latitude: 26.4499, longitude: 80.3319 },
    { pincode: "13", Address: "Nagpur", latitude: 21.1458, longitude: 79.0882 },
    { pincode: "14", Address: "Indore", latitude: 22.7196, longitude: 75.8577 },
    { pincode: "15", Address: "Thane", latitude: 19.2183, longitude: 72.9781 },
    { pincode: "16", Address: "Bhopal", latitude: 23.2599, longitude: 77.4126 },
    { pincode: "17", Address: "Visakhapatnam", latitude: 17.6868, longitude: 83.2185 },
    { pincode: "18", Address: "Patna", latitude: 25.5941, longitude: 85.1376 },
    { pincode: "19", Address: "Vadodara", latitude: 22.3072, longitude: 73.1812 },
    { pincode: "20", Address: "Ludhiana", latitude: 30.9010, longitude: 75.8573 },
    { pincode: "21", Address: "Other", latitude: 0.0000, longitude: 0.0000 } // Example coordinates for "Other"
];

console.log(availableLocation);

const EnterAddrsss = ({ visible, onClose }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [errorMessage, setErrorMessage] = useState("");
    const [selectenable, setSelectEnable] = useState(true);

    let pincodeId = [];


    const handleAddAddress = (values) => {
        const { pinCode } = values;
        const location = availableLocation.find(loc => loc.pincode === pinCode);
        console.log(location,"location");
        if (location) {
            if (location.pincode === "0") {
                setSelectEnable(false)
            } else {
                // Pin code found, show success message
                localStorage.setItem("pincode", location.pincode);
                message.success(`Pin code ${pinCode} is available at ${location.Address}`);
                onClose()
            }

        } else {
            // Pin code not found, show error message
            message.error(`We're sorry, we don't have a shop at this pin code`, 5);
        }
    };

    useEffect(() => {
        // Clear error message when modal is closed
        if (!visible) {
            setErrorMessage("");
        }
    }, [visible]);

    const handleClear = () => {
        form.resetFields();
    };

    return (
        <>
            <Modal
                visible={visible}
                onCancel={onClose}
                width="380px"
                footer={null}
                style={{ marginTop: "14%" }}
            >
                <h4 className="text-center font-weight-bold head-control mt-4 mb-4">
                    {pincodeId ? "Select your location" : "Enter the City"}
                </h4>

                <Form form={form} onFinish={handleAddAddress}>
                    <div className='col-md-12 row d-flex align-items-center'>
                        <Form.Item
                            name="pinCode"
                            className='col-md-12'
                            rules={[{ required: true, message: 'Please enter current City' }]}
                        >
                            <Input className="form-control text-input" disabled placeholder="Enter your Area/Locality" />
                        </Form.Item>
                        {selectenable && <div className='col-md-12'> 
                            {availableLocation.map((i) => (
                                <Button className='bg-secondary-subtle mx-1 my-1' onClick={() => {
                                    handleAddAddress({ pinCode: i })
                                }}>
                                    {i.Address}
                                </Button>
                            ))}
                         </div>}


                        <Form.Item>
                            <div style={{ textAlign: 'center' }} className='col-md-12 text-center'>
                                <Button type="dark" className="btn-style-one1 btn button w-50 h-25 mt-4 py-2" htmlType="submit">
                                    Confirm Location
                                </Button>
                            </div>
                        </Form.Item>
                    </div>
                </Form>
                {errorMessage && (
                    <div style={{ textAlign: 'center', marginTop: '16px' }}>
                        <Alert message={errorMessage} type="error" showIcon />
                    </div>
                )}
            </Modal>
        </>
    );
};



export default EnterAddrsss;
