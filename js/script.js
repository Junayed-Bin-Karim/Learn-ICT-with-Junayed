// Main JavaScript File for Learn ICT with Junayed Website

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navbar = document.querySelector('.navbar');
    
    if (mobileMenu && navbar) {
        mobileMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navbar.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navbar.classList.remove('active');
        });
    });
    
    // Tab Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Modal Functionality
    const addCourseBtn = document.getElementById('addCourseBtn');
    const addCourseModal = document.getElementById('addCourseModal');
    const closeModalBtn = document.querySelector('.close-btn');
    const cancelModalBtn = document.querySelector('.cancel-btn');
    
    if (addCourseBtn && addCourseModal) {
        addCourseBtn.addEventListener('click', function() {
            addCourseModal.style.display = 'flex';
        });
    }
    
    if (closeModalBtn && addCourseModal) {
        closeModalBtn.addEventListener('click', function() {
            addCourseModal.style.display = 'none';
        });
    }
    
    if (cancelModalBtn && addCourseModal) {
        cancelModalBtn.addEventListener('click', function() {
            addCourseModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === addCourseModal) {
            addCourseModal.style.display = 'none';
        }
    });
    
    // Form Validations
    // Registration Form Validation
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (name.value.trim() === '') {
                nameError.textContent = 'নাম প্রদান করা বাধ্যতামূলক';
                isValid = false;
            } else {
                nameError.textContent = '';
            }
            
            // Email validation
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                emailError.textContent = 'ইমেইল প্রদান করা বাধ্যতামূলক';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                emailError.textContent = 'সঠিক ইমেইল প্রদান করুন';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Phone validation
            const phone = document.getElementById('phone');
            const phoneError = document.getElementById('phoneError');
            const phoneRegex = /^01[3-9]\d{8}$/;
            if (phone.value.trim() === '') {
                phoneError.textContent = 'মোবাইল নম্বর প্রদান করা বাধ্যতামূলক';
                isValid = false;
            } else if (!phoneRegex.test(phone.value)) {
                phoneError.textContent = 'সঠিক মোবাইল নম্বর প্রদান করুন';
                isValid = false;
            } else {
                phoneError.textContent = '';
            }
            
            // Password validation
            const password = document.getElementById('password');
            const passwordError = document.getElementById('passwordError');
            if (password.value.trim() === '') {
                passwordError.textContent = 'পাসওয়ার্ড প্রদান করা বাধ্যতামূলক';
                isValid = false;
            } else if (password.value.length < 6) {
                passwordError.textContent = 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }
            
            // Confirm Password validation
            const confirmPassword = document.getElementById('confirmPassword');
            const confirmPasswordError = document.getElementById('confirmPasswordError');
            if (confirmPassword.value.trim() === '') {
                confirmPasswordError.textContent = 'পাসওয়ার্ড নিশ্চিত করুন';
                isValid = false;
            } else if (confirmPassword.value !== password.value) {
                confirmPasswordError.textContent = 'পাসওয়ার্ড মিলছে না';
                isValid = false;
            } else {
                confirmPasswordError.textContent = '';
            }
            
            // Terms validation
            const terms = document.getElementById('terms');
            const termsError = document.getElementById('termsError');
            if (!terms.checked) {
                termsError.textContent = 'আপনাকে সেবার শর্তাবলী গ্রহণ করতে হবে';
                isValid = false;
            } else {
                termsError.textContent = '';
            }
            
            // If form is valid, save to local storage and redirect
            if (isValid) {
                const user = {
                    name: name.value.trim(),
                    email: email.value.trim(),
                    phone: phone.value.trim(),
                    password: password.value
                };
                
                // Save to local storage
                localStorage.setItem('user', JSON.stringify(user));
                
                // Redirect to login page
                window.location.href = 'login.html';
            }
        });
    }
    
    // Login Form Validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Email validation
            const email = document.getElementById('loginEmail');
            const emailError = document.getElementById('loginEmailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                emailError.textContent = 'ইমেইল প্রদান করা বাধ্যতামূলক';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                emailError.textContent = 'সঠিক ইমেইল প্রদান করুন';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Password validation
            const password = document.getElementById('loginPassword');
            const passwordError = document.getElementById('loginPasswordError');
            if (password.value.trim() === '') {
                passwordError.textContent = 'পাসওয়ার্ড প্রদান করা বাধ্যতামূলক';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }
            
            // If form is valid, check credentials
            if (isValid) {
                const storedUser = JSON.parse(localStorage.getItem('user'));
                
                if (storedUser && 
                    storedUser.email === email.value.trim() && 
                    storedUser.password === password.value) {
                    
                    // Create session
                    sessionStorage.setItem('loggedIn', 'true');
                    sessionStorage.setItem('userEmail', storedUser.email);
                    sessionStorage.setItem('userName', storedUser.name);
                    sessionStorage.setItem('userPhone', storedUser.phone);
                    
                    // Redirect to dashboard
                    window.location.href = 'dashboard.html';
                } else {
                    alert('ভুল ইমেইল বা পাসওয়ার্ড! অনুগ্রহ করে আবার চেষ্টা করুন।');
                }
            }
        });
    }
    
    // Dashboard - Load user data
    const welcomeMessage = document.getElementById('welcomeMessage');
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profilePhone = document.getElementById('profilePhone');
    
    if (welcomeMessage && profileName && profileEmail && profilePhone) {
        const loggedIn = sessionStorage.getItem('loggedIn');
        
        if (loggedIn === 'true') {
            const userName = sessionStorage.getItem('userName');
            const userEmail = sessionStorage.getItem('userEmail');
            const userPhone = sessionStorage.getItem('userPhone');
            
            welcomeMessage.textContent = `স্বাগতম, ${userName}!`;
            profileName.textContent = userName;
            profileEmail.textContent = userEmail;
            profilePhone.textContent = userPhone;
        } else {
            // Redirect to login if not logged in
            window.location.href = 'login.html';
        }
    }
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sessionStorage.removeItem('loggedIn');
            sessionStorage.removeItem('userEmail');
            sessionStorage.removeItem('userName');
            sessionStorage.removeItem('userPhone');
            window.location.href = 'index.html';
        });
    }
    
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sessionStorage.removeItem('adminLoggedIn');
            window.location.href = 'index.html';
        });
    }
    
    // Payment Form Validation
    const bkashForm = document.getElementById('bkashForm');
    if (bkashForm) {
        bkashForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // bKash number validation
            const bkashNumber = document.getElementById('bkashNumber');
            const bkashNumberError = document.getElementById('bkashNumberError');
            const phoneRegex = /^01[3-9]\d{8}$/;
            if (bkashNumber.value.trim() === '') {
                bkashNumberError.textContent = 'bKash নম্বর প্রদান করা বাধ্যতামূলক';
                isValid = false;
            } else if (!phoneRegex.test(bkashNumber.value)) {
                bkashNumberError.textContent = 'সঠিক bKash নম্বর প্রদান করুন';
                isValid = false;
            } else {
                bkashNumberError.textContent = '';
            }
            
            // Transaction ID validation
            const transactionId = document.getElementById('transactionId');
            const transactionIdError = document.getElementById('transactionIdError');
            if (transactionId.value.trim() === '') {
                transactionIdError.textContent = 'ট্রানজেকশন আইডি প্রদান করা বাধ্যতামূলক';
                isValid = false;
            } else if (transactionId.value.trim().length < 8) {
                transactionIdError.textContent = 'ট্রানজেকশন আইডি কমপক্ষে ৮ অক্ষরের হতে হবে';
                isValid = false;
            } else {
                transactionIdError.textContent = '';
            }
            
            // If form is valid, show success message
            if (isValid) {
                alert('পেমেন্ট সফলভাবে জমা দেওয়া হয়েছে! আমরা শীঘ্রই আপনার পেমেন্ট ভেরিফাই করব।');
                window.location.href = 'dashboard.html';
            }
        });
    }
    
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('contactName');
            const nameError = document.getElementById('contactNameError');
            if (name.value.trim() === '') {
                nameError.textContent = 'নাম প্রদান করা বাধ্যতামূলক';
                isValid = false;
            } else {
                nameError.textContent = '';
            }
            
            // Email validation
            const email = document.getElementById('contactEmail');
            const emailError = document.getElementById('contactEmailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                emailError.textContent = 'ইমেইল প্রদান করা বাধ্যতামূলক';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                emailError.textContent = 'সঠিক ইমেইল প্রদান করুন';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Subject validation
            const subject = document.getElementById('contactSubject');
            const subjectError = document.getElementById('contactSubjectError');
            if (subject.value === '') {
                subjectError.textContent = 'বিষয় নির্বাচন করা বাধ্যতামূলক';
                isValid = false;
            } else {
                subjectError.textContent = '';
            }
            
            // Message validation
            const message = document.getElementById('contactMessage');
            const messageError = document.getElementById('contactMessageError');
            if (message.value.trim() === '') {
                messageError.textContent = 'মেসেজ প্রদান করা বাধ্যতামূলক';
                isValid = false;
            } else {
                messageError.textContent = '';
            }
            
            // If form is valid, show success message
            if (isValid) {
                alert('আপনার মেসেজ সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
                contactForm.reset();
            }
        });
    }
    
    // Course Enrollment
    const enrollBtns = document.querySelectorAll('.enroll-btn');
    enrollBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const loggedIn = sessionStorage.getItem('loggedIn');
            
            if (loggedIn === 'true') {
                const courseCard = this.closest('.course-card');
                const courseTitle = courseCard.querySelector('h3').textContent;
                const courseBadge = courseCard.querySelector('.course-badge').textContent;
                
                if (courseBadge === 'ফ্রি') {
                    // Redirect to course page for free courses
                    window.location.href = 'dashboard.html';
                } else {
                    // Redirect to payment page for paid courses
                    window.location.href = 'payment.html';
                }
            } else {
                // Redirect to login page if not logged in
                alert('কোর্সে এনরোল করতে আপনাকে লগইন করতে হবে।');
                window.location.href = 'login.html';
            }
        });
    });
    
    // Admin Dashboard - Check if admin is logged in
    if (window.location.pathname.includes('admin.html')) {
        const adminLoggedIn = sessionStorage.getItem('adminLoggedIn');
        
        if (adminLoggedIn !== 'true') {
            // Redirect to login if not logged in as admin
            window.location.href = 'login.html';
        }
    }
    
    // Add hover effect to course cards
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
});