import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const ContactPage = () => {
    return (
        <>
            <Header />
            <div className="container my-3 py-3 border bg-success w-50">
                <h1 className="text-center">Contact Us</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto ">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Name</label>
                                <input
                                    type="email"
                                    class="form-control "
                                    id="Name"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            
                           <div class="form  my-3">
                                <label for="Textarea">Message</label>
                                <textarea
                                    rows={5}
                                    class="form-control"
                                    id="textarea"
                                    placeholder="Enter your message"
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    class="my-2 px-4 mx-auto btn btn-dark"
                                    type="submit"
                                    disabled
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        <Footer></Footer>
        </>
    );
};

export default ContactPage;