import React, { useState } from 'react';
import { LockOutlined, GitlabOutlined  } from '@ant-design/icons';
import { Form, Input, Radio, DatePicker} from 'antd';


const ReservationPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [arrivalDate, setArrivalDate] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);
  
    const onFinish = (values) => {
        console.log('Reservation details:', values);
    };
  
    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };
  
    const onArrivalDateChange = (date, dateString) => {
        setArrivalDate(dateString);
    };
  
    const onDepartureDateChange = (date, dateString) => {
        setDepartureDate(dateString);
    };

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-bold text-center font-serif mt-3 mb-1">Réservez votre séjour</h1>
            <div className="flex items-center justify-center mb-4">
                <hr className="flex-grow border-t border-gray-500 mr-1 max-w-[20px]" />
                <GitlabOutlined className="text-2xl text-gray-500" />
                <hr className="flex-grow border-t border-gray-500 ml-1 max-w-[20px]" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-xl">
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1">
                        <img src="https://st3.depositphotos.com/2019955/15658/i/450/depositphotos_156586568-stock-photo-woman-in-flowered-dress-holding.jpg" alt="#" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-2">Dates de séjour</h2>
                        <Form layout="vertical" onFinish={onFinish}>
                            <Form.Item
                                label="Date d'arrivée"
                                name="arrivalDate"
                                rules={[{ required: true, message: 'Veuillez sélectionner la date d\'arrivée' }]}
                            >
                                <DatePicker onChange={onArrivalDateChange} style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                                label="Date de départ"
                                name="departureDate"
                                rules={[{ required: true, message: 'Veuillez sélectionner la date de départ' }]}
                            >
                                <DatePicker onChange={onDepartureDateChange} style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item>
                                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg border border-orange-500 hover:bg-transparent hover:border-orange-500 hover:text-black">
                                    <p className='text-semibold text-xl'>Confirmer</p>
                                </button>
                            </Form.Item>
                        </Form>
                    </div>

                  
                </div>
            </div>
        </div>
    );
};

export default ReservationPage;
