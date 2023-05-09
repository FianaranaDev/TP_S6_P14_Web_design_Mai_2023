import {Head} from "@inertiajs/react";

export default function HeaderBO() {
    return (
        <>
            <Head>
                <meta charset="utf-8"/>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

                        <meta content="" name="description"/>
                            <meta content="" name="keywords"/>

                                <link href="/bo/assets/img/favicon.png" rel="icon"></link>
                                <link href="/bo/assets/img/apple-touch-icon.png" rel="apple-touch-icon"></link>

                                <link href="https://fonts.gstatic.com" rel="preconnect"></link>
                                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"></link>

                                <link href="/bo/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"></link>
                                <link href="/bo/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"></link>
                                <link href="/bo/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"></link>
                                <link href="/bo/assets/vendor/quill/quill.snow.css" rel="stylesheet"></link>
                                <link href="/bo/assets/vendor/quill/quill.bubble.css" rel="stylesheet"></link>
                                <link href="/bo/assets/vendor/remixicon/remixicon.css" rel="stylesheet"></link>
                                <link href="/bo/assets/vendor/simple-datatables/style.css" rel="stylesheet"></link>
                                <link href="/bo/assets/css/style.css" rel="stylesheet"></link>
            </Head>

    <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
                <img src="assets/img/logo.png" alt=""></img>
                <span className="d-none d-lg-block">NiceAdmin</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>

        <div className="search-bar">

        </div>

        <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center"></ul>
        </nav>
    </header>


    <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="/admin/con">
                    <i className="bi bi-grid"></i>
                    <span>List Contenue</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>

            </li>
            <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/admin/categorie">
                    <i className="bi bi-journal-text"></i><span>Ajout Category</span><i
                    className="bi bi-chevron-down ms-auto"></i>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/admin/contenue">
                    <i className="bi bi-journal-text"></i><span>Ajout Contenue</span><i
                    className="bi bi-chevron-down ms-auto"></i>
                </a>
            </li>



        </ul>
    </aside>
        </>

);
            }







