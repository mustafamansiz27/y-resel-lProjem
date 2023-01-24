


const handleVisitCount =()=>{
    let count = localStorage.getItem("pageVisit");
    count ??=0;
    count ++;
    localStorage.setItem("pageVisit",count);
    alert(`merhaba sitemizi ${count}kez ziyaret ettiniz`);
}

handleVisitCount();