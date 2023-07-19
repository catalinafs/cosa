const [mobile, setMobile] = useState(false)

useEffect(() => {
    function handleResize() {
        if (window.innerWidth <= 768) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    }
}, []);

let isMobile = mobile ? <HeaderMobile /> : <Header />;

{/* {isMobile} */ }

{/* <Info isMobileMd={isMobileMd} /> */}