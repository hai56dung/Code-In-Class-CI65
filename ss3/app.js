try {
    throw new Error('Yeah... Sorry');
}
catch(e) {
    console.log(e);
}

try {
    document.write("<p>Câu lệnh try-catch trong JavaScript</p>");
    alertrt("<p>Câu lệnh này có lỗi nè</p>"); //Cố tình để câu lệnh này có lỗi nè
    document.write("<p>Câu lệnh này đúng nè</p>");
} catch (ex) {
    document.write("<p>Nếu trong try có lỗi thì dòng này sẽ chạy nè</p>");
    document.write(
        "<p>Dòng này thông báo lỗi nè: " + ex.toString() + "</p>"
    );
} finally {
    document.write("<p>Cái này nó luôn chạy nè</p>");
}