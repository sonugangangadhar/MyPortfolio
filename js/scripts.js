
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");
    const closeModalButton = document.querySelector(".close-btn");

    const projects = {
        project2: {
            title: "BIN Portal (Banking Domain, USA)",
            description: `
                <p>Developed and deployed a scalable, secure, and high-performance web application for banking operations at PNC Bank, ensuring compliance with industry regulations and security standards such as PCI-DSS and SOX.</p>
                <ul>
                    <li><strong>Full-Stack Development:</strong> Designed and built the application using .NET C# for backend APIs and React.js for the front-end.</li>
                    <li><strong>API Development & Integration:</strong> Created and maintained robust RESTful APIs.</li>
                    <li><strong>Security & Compliance:</strong> Implemented advanced security measures, including role-based authentication and encryption.</li>
                    <li><strong>Performance & Scalability:</strong> Optimized the application architecture to handle high traffic loads.</li>
                    <li><strong>User Experience & Accessibility:</strong> Designed an intuitive UI using React.js.</li>
                </ul>
                <p>Significantly improved operational efficiency, security, and customer experience.</p>
            `
        },
        project3: {
            title: "VAPT Remediation (Banking Domain, USA)",
            description: `
            Conducted vulnerability assessments and implemented security fixes for enterprise applications deployed on Azure cloud, ensuring compliance with banking security regulations and industry standards.
            <ul>
                <li><strong>Security Assessment & Compliance:</strong> Identified vulnerabilities in banking applications using OWASP guidelines and industry security benchmarks.</li>
                <li><strong>Threat Mitigation & Patching:</strong> Applied security patches and fixed critical vulnerabilities to protect against cyber threats.</li>
                <li><strong>Cloud Security & Hardening:</strong> Strengthened Azure cloud security by implementing role-based access control (RBAC), encryption, and security monitoring.</li>
                <li><strong>Penetration Testing & Risk Analysis:</strong> Performed penetration testing (Pentesting) to simulate cyber attacks and mitigate risks effectively.</li>
                <li><strong>Performance & Reliability:</strong> Ensured that security enhancements did not affect application performance by conducting thorough regression testing.</li>
                <li><strong>User Access & Authentication:</strong> Implemented multi-factor authentication (MFA) and secure identity management to prevent unauthorized access.</li>
            </ul>
            This project significantly enhanced the security posture of the banking applications, ensuring robust threat protection, compliance with financial regulations, and improved reliability of cloud-deployed enterprise systems.
        `
        },
        project5: {
            title: "Regression & Classification on Housing Data",
            description: `
            Conducted regression and classification analysis on a dataset of individual housing near WSU to predict rental prices and gain insights into key influencing factors.
            <ul>
                <li><strong>Data Analysis & Preparation:</strong> Cleaned and preprocessed housing data, handling missing values and normalizing features for better model performance.</li>
                <li><strong>Model Implementation:</strong> Applied multiple machine learning models, including Linear Regression, Logistic Regression, Naïve Bayes, and Support Vector Machines (SVM), to analyze housing data.</li>
                <li><strong>Performance Evaluation:</strong> Evaluated model accuracy using statistical metrics such as R-squared, F-statistics, and AUC scores to determine the most effective predictive approach.</li>
                <li><strong>Feature Engineering:</strong> Identified key factors influencing rental prices through correlation analysis and feature selection techniques.</li>
                <li><strong>Comparative Analysis:</strong> Compared different models to assess their predictive power and optimized hyperparameters for improved performance.</li>
                <li><strong>Insights & Decision Making:</strong> Provided data-driven insights to help property owners and renters make informed decisions based on rental price trends.</li>
            </ul>
            This project showcased the application of machine learning techniques to real-world housing data, improving predictive modeling for rental price estimation.
        `
        },
        project6: {
            title: "Dynamic State Estimation for Power Grids",
            description: `
            Developed an advanced Dynamic State Estimation (DSE) model to improve the stability of power grids with a high penetration of Converter-Based Resources (CBRs) such as wind and solar.
            <ul>
                <li><strong>Enhanced Grid Observability:</strong> Utilized Phasor Measurement Units (PMUs) and Sampled Value (SV) measurements to improve real-time monitoring and control of power systems.</li>
                <li><strong>State Estimation Techniques:</strong> Implemented Kalman Filtering approaches, including Extended Kalman Filter (EKF), Unscented Kalman Filter (UKF), and Particle Filters, to estimate system dynamics with high precision.</li>
                <li><strong>Fault Detection & Adaptive Protection:</strong> Designed algorithms for early fault detection and adaptive protection strategies, enhancing system resilience in low-inertia power networks.</li>
                <li><strong>Modeling & Simulation:</strong> Developed power grid models in MATLAB, Simulink, and PSCAD to simulate and validate the effectiveness of DSE under various grid conditions.</li>
                <li><strong>Performance Optimization:</strong> Tuned estimation algorithms to minimize errors, improve computational efficiency, and ensure real-time applicability in smart grids.</li>
                <li><strong>Application & Impact:</strong> Enabled improved grid reliability, faster response to disturbances, and enhanced integration of renewable energy sources.</li>
            </ul>
            This project contributed to advancing real-time stability assessment techniques, ensuring the efficient operation of modern power grids dominated by renewable energy sources.
        `
        }
    };

    document.querySelectorAll(".learn-more").forEach(button => {
        button.addEventListener("click", function () {
            const projectKey = this.getAttribute("data-project");
            if (projects[projectKey]) {
                modalTitle.innerHTML = projects[projectKey].title;
                modalDescription.innerHTML = projects[projectKey].description;
                modal.style.display = "flex";
                document.body.classList.add("modal-open"); // Disable scrolling
            }
        });
    });

    function closeModalFunction() {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Enable scrolling
    }

    closeModal.addEventListener("click", closeModalFunction);
    closeModalButton.addEventListener("click", closeModalFunction);

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });
});
