import React from 'react'
import Footer from './Footer';

import Header from './Header';
const AboutPage = () => {
    return (
        <>

            <Header></Header>
            <div className="container my-3 py-3 sm">
                <h1 className="text-center sm">About Us</h1>
                <hr />
                <p className="lead text-center text-dark">
                    An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.

                    It’s tough to imagine daily life without e-commerce. We order food, clothes, and furniture; we register for classes and other online services; we download books, music, and movies; and so much more. E-commerce has taken root and is here to stay.

                    The term “e-commerce” simply means the sale of goods or services on the internet. In its most basic form, e-commerce involves electronically transferring funds and data between 2 or more parties. This form of business has evolved quite a bit since its beginnings in the electronic data interchange of the 1960s and the inception of online shopping in the 1990s.

                    In recent years, e-commerce has enjoyed a massive boost from the rise of smartphones, which allow consumers to shop from nearly anywhere.
                </p>

                <h2 className="text-center py-4">Our Products</h2>
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Mens's Clothing</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Women's Clothing</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Jewelery</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Electronics</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Shoes</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Electronics</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Electronics</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Electronics</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default AboutPage;