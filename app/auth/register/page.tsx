'use client'
import { useEffect, useState } from "react";
import "@fontsource/poppins";
import "@/app/css/login.css";
import thintryLogo from '@/public/img/logo.png';
import Image from 'next/image';
import Link from "next/link";
import Head from 'next/head';
import { getCookie } from "cookies-next";

export default function App() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [userId, setUserId] = useState("");
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        country_code: '',
        phone: '',
        password: '',
        terms_accept: false,
    });
    const [otp, setOtp] = useState(""); // State to hold the OTP
    const [showOtpForm, setShowOtpForm] = useState(false); // State to control which form is displayed

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    useEffect(() => {
        const jwt = getCookie("token");
        if (jwt) {
            location.href = "/";
        }
        document.title = "Register / Grovix Lab";
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmitRegistration = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission
        try {
            const response = await fetch('http://192.168.1.60:3002/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    email: formData.email,
                    country_code: formData.country_code,
                    contact_no: formData.phone,
                    password: formData.password
                }),
            });

            if (response.ok) {
                const data = await response.json();
                // Handle successful registration
                setUserId(data.user.user_id); // Save user ID
                setShowOtpForm(true); // Show OTP form
                console.log('Registration successful:', data);
            } else {
                const errorData = await response.json();
                // Handle errors (e.g., show error message)
                console.error('Registration error:', errorData);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    const handleSubmitOtp = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission
        try {
            const response = await fetch('http://192.168.1.60:3002/api/auth/verify-otp', { // Replace with your actual API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: userId,
                    otp: otp,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                // Handle successful OTP verification (e.g., redirect, show success message)
                console.log('OTP verification successful:', data);
                location.href = "/auth/login"
                // Redirect or show a success message here
            } else {
                const errorData = await response.json();
                // Handle errors (e.g., show error message)
                console.error('OTP verification error:', errorData);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return (
        <>
            <Head>
                <title>Register / Grovix Lab</title>
            </Head>
            <div className="container">
                {showOtpForm ? (
                    // OTP Form
                    <form id="form" className="regForm" onSubmit={handleSubmitOtp}>
                        <div className="inputImage">
                            <img src={thintryLogo.src} alt="" />
                        </div>
                        <div className="inputBox">
                            <input
                                type="number"
                                name="otp"
                                id="otp"
                                placeholder="One Time Password"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                            />
                        </div>
                        <div className="inputBox inputButton">
                            <button type="submit">
                                Register
                            </button>
                        </div>
                        <div className="inputText">
                            <span>Don't forget to check your spam folder.</span>
                        </div>
                    </form>
                ) : (
                    // Registration Form
                    <form id="form" className="regForm" onSubmit={handleSubmitRegistration}>
                        <div className="inputImage">
                            <img src={thintryLogo.src} alt="" />
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                placeholder="First Name"
                                value={formData.first_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                placeholder="Last Name"
                                value={formData.last_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="inputBox">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="inputBox">
                            <input
                                type="number"
                                style={{ borderRadius: "0px", width: "40px" }}
                                name="country_code"
                                id="country_code"
                                placeholder="+91"
                                value={formData.country_code}
                                onChange={handleChange}
                                required
                            />
                            &nbsp;
                            <input
                                type="tel"
                                style={{ borderRadius: "0px" }}
                                name="phone"
                                id="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="inputBox" style={{ background: "#f0f0f0" }}>
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                id="togglePassword"
                                style={{ marginLeft: "-30px", background: "none", border: "none", cursor: "pointer" }}
                                onClick={togglePasswordVisibility}
                            >
                                {isPasswordVisible ? (
                                    // Hide Icon
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 8.56666C4.4 3.36666 11.6 3.36666 14 8.56666M8 11.3667C7.57565 11.3667 7.16869 11.1981 6.86863 10.898C6.56857 10.598 6.4 10.191 6.4 9.76666C6.4 9.34231 6.56857 8.93534 6.86863 8.63529C7.16869 8.33523 7.57565 8.16666 8 8.16666C8.42435 8.16666 8.83131 8.33523 9.13137 8.63529C9.43143 8.93534 9.6 9.34231 9.6 9.76666C9.6 10.191 9.43143 10.598 9.13137 10.898C8.83131 11.1981 8.42435 11.3667 8 11.3667Z" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                ) : (
                                    // Show Icon
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 4.66667C4.4 9.86667 11.6 9.86667 14 4.66667M11.8528 7.32107L14 10.2667M8 8.56667V11.4667M4.1472 7.32107L2 10.2667" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="inputText">
                            <input
                                type="checkbox"
                                name="terms_accept"
                                id="terms"
                                checked={formData.terms_accept}
                                onChange={handleChange}
                                required
                            />
                            <span>
                                By using our services, you are accepting our <Link href="/terms-of-service" target="_blank">terms of service</Link>.
                            </span>
                        </div>
                        <div className="inputBox inputButton">
                            <button type="submit">
                                Register
                            </button>
                        </div>
                        <div className="inputText">
                            <span>Already have an account? <Link href="/auth/login">Login</Link>.</span>
                        </div>
                    </form>
                )}
            </div>
        </>
    );
}
