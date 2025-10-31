// ============================
// 🧠 MBTI QUIZ 70 CÂU (RANDOM)
// ============================

// Dữ liệu câu hỏi MBTI 70 câu (rút gọn ký hiệu theo cặp tính cách)
// ============================

const fullMbtiQuestions = [
  { q: "Tại một buổi tiệc, bạn sẽ:", a: "E", b: "I", A: "Giao tiếp với nhiều người, kể cả người lạ", B: "Chỉ giao tiếp với một số ít người mà bạn đã quen" },
  { q: "Bạn thấy mình là người nghiêng về kiểu nào nhiều hơn?", a: "S", b: "N", A: "Thực tế", B: "Sáng tạo" },
  { q: "Bạn nghĩ tình huống nào tồi tệ hơn?", a: "S", b: "N", A: "Đầu óc của bạn cứ 'bay bổng trên mây'", B: "Cuộc sống của bạn thật nhàm chán và không bao giờ thay đổi" },
  { q: "Bạn sẽ bị ấn tượng hơn với:", a: "T", b: "F", A: "Các nguyên tắc", B: "Những cảm xúc" },
  { q: "Khi quyết định việc gì đó, bạn thường hay dựa vào:", a: "T", b: "F", A: "Sự thuyết phục", B: "Sự đồng cảm" },
  { q: "Bạn thích làm việc theo kiểu nào nhiều hơn?", a: "J", b: "P", A: "Theo đúng thời hạn", B: "Tùy hứng" },
  { q: "Bạn có khuynh hướng đưa ra các lựa chọn:", a: "J", b: "P", A: "Rất cẩn thận", B: "Phần nào theo cảm nhận" },
  { q: "Tại các bữa tiệc, bạn thường:", a: "E", b: "I", A: "Ở lại tới cùng và cảm thấy càng lúc càng hào hứng", B: "Ra về sớm vì cảm thấy mệt mỏi dần" },
  { q: "Kiểu người nào sẽ thu hút bạn hơn?", a: "S", b: "N", A: "Người thực tế và có lý lẽ", B: "Người giàu trí tưởng tượng" },
  { q: "Điều nào khiến bạn thấy thích thú hơn?", a: "S", b: "N", A: "Những điều thực tế", B: "Những ý tưởng khả thi" },
  { q: "Khi đánh giá hoặc phán xét người khác, bạn thường hay dựa vào điều gì?", a: "T", b: "F", A: "Luật lệ và nguyên tắc", B: "Hoàn cảnh" },
  { q: "Khi tiếp cận, tiếp xúc người khác, bạn nghiêng về hướng nào hơn?", a: "T", b: "F", A: "Tiếp cận khách quan", B: "Tiếp cận theo trải nghiệm cá nhân" },
  { q: "Phong cách của bạn nghiêng về hướng nào hơn?", a: "J", b: "P", A: "Đúng giờ, nghiêm túc", B: "Nhàn nhã, thoải mái" },
  { q: "Bạn cảm thấy không thoải mái khi có những việc:", a: "J", b: "P", A: "Chưa hoàn thiện", B: "Đã quá hoàn thiện" },
  { q: "Trong các mối quan hệ xã hội, bạn thường:", a: "E", b: "I", A: "Luôn nắm bắt kịp thời thông tin về mọi người", B: "Thường biết thông tin sau người khác" },
  { q: "Với các công việc thông thường, bạn nghiêng về cách:", a: "S", b: "N", A: "Làm theo cách thông thường", B: "Làm theo cách riêng của mình" },
  { q: "Các nhà văn nên:", a: "S", b: "N", A: "Viết những gì họ nghĩ và chân thật với bản thân", B: "Diễn đạt bằng so sánh và liên tưởng" },
  { q: "Điều gì lôi cuốn bạn hơn?", a: "T", b: "F", A: "Tính nhất quán trong tư duy", B: "Sự hòa hợp trong mối quan hệ con người" },
  { q: "Bạn cảm thấy thoải mái hơn khi đưa ra:", a: "T", b: "F", A: "Những nhận xét logic", B: "Những nhận xét có ý nghĩa" },
  { q: "Bạn thích những điều:", a: "J", b: "P", A: "Được sắp xếp, quyết định trước", B: "Chưa xác định, chưa được quyết định" },
  { q: "Bạn tự thấy mình:", a: "J", b: "P", A: "Nghiêm túc, quyết đoán", B: "Dễ gần, thoải mái" },
  { q: "Khi nói chuyện điện thoại, bạn:", a: "E", b: "I", A: "Cứ gọi bình thường", B: "Chuẩn bị trước những điều sẽ nói" },
  { q: "Những sự kiện trong thực tế:", a: "S", b: "N", A: "Tự nó giải thích cho chính nó", B: "Là bằng chứng cho quy tắc, quy luật" },
  { q: "Những người có tầm nhìn xa thường:", a: "S", b: "N", A: "Gây khó chịu cho người khác", B: "Khá thú vị" },
  { q: "Bạn thường là người:", a: "T", b: "F", A: "Cái đầu lạnh", B: "Trái tim nóng" },
  { q: "Điều nào thì tồi tệ hơn?", a: "T", b: "F", A: "Không công bằng", B: "Tàn nhẫn" },
  { q: "Các sự kiện nên xảy ra theo hướng:", a: "J", b: "P", A: "Cân nhắc kỹ lưỡng", B: "Ngẫu nhiên và tự nhiên" },
  { q: "Bạn cảm thấy thoải mái hơn khi:", a: "J", b: "P", A: "Đã mua một thứ gì đó", B: "Đang lựa chọn để mua" },
  { q: "Trong công ty, bạn là người:", a: "E", b: "I", A: "Khởi xướng các câu chuyện", B: "Đợi người khác bắt chuyện" },
  { q: "Đối với những quy tắc xã hội, bạn:", a: "S", b: "N", A: "Ít khi nghi ngờ", B: "Thường xem xét lại tính đúng đắn" },
  { q: "Trẻ em thường:", a: "T", b: "F", A: "Chưa cố gắng đủ", B: "Chưa vui chơi đủ" },
  { q: "Khi đưa ra quyết định, bạn thấy thoải mái hơn với:", a: "T", b: "F", A: "Tiêu chuẩn", B: "Cảm xúc" },
  { q: "Bạn nghiêng về tính cách nào hơn?", a: "T", b: "F", A: "Cứng rắn", B: "Nhẹ nhàng" },
  { q: "Theo bạn, khả năng nào đáng khâm phục hơn?", a: "J", b: "P", A: "Khả năng tổ chức và làm việc có phương pháp", B: "Khả năng thích ứng linh hoạt" },
  { q: "Bạn đề cao tố chất nào hơn?", a: "J", b: "P", A: "Sự chắc chắn", B: "Sự cởi mở" },
  { q: "Khi tương tác với người khác trong tình huống mới lạ, bạn:", a: "E", b: "I", A: "Thấy hào hứng", B: "Cảm thấy mệt mỏi" },
  { q: "Thường thì bạn là:", a: "S", b: "N", A: "Người thực tế", B: "Người tưởng tượng phong phú" },
  { q: "Bạn có xu hướng:", a: "T", b: "F", A: "Xem người khác làm được gì hữu ích", B: "Xem họ nghĩ và cảm nhận thế nào" },
  { q: "Bạn cảm thấy thoải mái hơn khi:", a: "T", b: "F", A: "Thảo luận vấn đề kỹ lưỡng", B: "Đạt được sự đồng thuận" },
  { q: "Cái đầu hay trái tim chi phối bạn nhiều hơn?", a: "T", b: "F", A: "Cái đầu", B: "Trái tim" },
  { q: "Bạn cảm thấy thoải mái hơn khi làm công việc:", a: "J", b: "P", A: "Theo kế hoạch cụ thể", B: "Linh hoạt theo ngày" },
  { q: "Bạn có xu hướng tìm kiếm điều gì?", a: "J", b: "P", A: "Theo trật tự, thứ tự", B: "Ngẫu nhiên" },
  { q: "Bạn thích kiểu nào hơn?", a: "E", b: "I", A: "Nhiều bạn bè xã giao", B: "Một vài người bạn thân" },
  { q: "Bạn thường dựa vào:", a: "S", b: "N", A: "Sự kiện thực tế", B: "Nguyên lý, nguyên tắc" },
  { q: "Bạn hứng thú với việc gì hơn?", a: "S", b: "N", A: "Sản xuất và phân phối", B: "Thiết kế và nghiên cứu" },
  { q: "Lời khen nào giá trị hơn?", a: "T", b: "F", A: "Người có suy nghĩ logic", B: "Người tình cảm, tinh tế" },
  { q: "Bạn thích mình có tố chất nào hơn?", a: "T", b: "F", A: "Kiên định, vững vàng", B: "Toàn tâm, cống hiến" },
  { q: "Bạn thường thích điều nào hơn?", a: "J", b: "P", A: "Tuyên bố cuối cùng, dứt khoát", B: "Tuyên bố dự kiến, ban đầu" },
  { q: "Bạn thấy thoải mái hơn khi:", a: "J", b: "P", A: "Trước khi ra quyết định", B: "Sau khi đã quyết định" },
  { q: "Bạn có thấy mình:", a: "E", b: "I", A: "Dễ bắt chuyện với người mới", B: "Khó trò chuyện với người lạ" },
  { q: "Bạn có xu hướng tin tưởng vào:", a: "S", b: "N", A: "Kinh nghiệm bản thân", B: "Linh cảm" },
  { q: "Bạn thuộc tuýp người nào hơn?", a: "S", b: "N", A: "Người thực tế", B: "Người khôn khéo" },
  { q: "Ai đáng khen hơn?", a: "T", b: "F", A: "Người giàu lý trí", B: "Người giàu cảm xúc" },
  { q: "Bạn có xu hướng hành xử:", a: "T", b: "F", A: "Công bằng, vô tư", B: "Thông cảm, đồng cảm" },
  { q: "Bạn thích:", a: "J", b: "P", A: "Chuẩn bị mọi việc sẵn sàng", B: "Để mọi việc diễn ra tự nhiên" },
  { q: "Trong các mối quan hệ, bạn tin rằng:", a: "J", b: "P", A: "Mọi việc có thể bàn bạc, giải quyết", B: "Tùy hoàn cảnh, ngẫu nhiên" },
  { q: "Khi chuông điện thoại reo, bạn:", a: "E", b: "I", A: "Là người đầu tiên nhấc máy", B: "Hy vọng người khác nhấc máy" },
  { q: "Bạn đánh giá cao điều gì ở mình hơn?", a: "S", b: "N", A: "Nhận thức thực tế tốt", B: "Trí tưởng tượng phong phú" },
  { q: "Bạn chú tâm hơn đến:", a: "S", b: "N", A: "Nguyên tắc cơ bản", B: "Ngụ ý, ẩn ý" },
  { q: "Điều gì là lỗi lớn hơn?", a: "T", b: "F", A: "Quá nồng nhiệt", B: "Quá khách quan, thờ ơ" },
  { q: "Về cơ bản, bạn thấy mình là người:", a: "T", b: "F", A: "Thiết thực, ít cảm xúc", B: "Từ tâm, đa cảm" },
  { q: "Tình huống nào khiến bạn hứng thú hơn?", a: "J", b: "P", A: "Rõ ràng, có kế hoạch", B: "Không xác định, linh hoạt" },
  { q: "Bạn có xu hướng nào hơn?", a: "J", b: "P", A: "Theo thói quen", B: "Hay thay đổi" },
  { q: "Bạn có xu hướng nào hơn?", a: "E", b: "I", A: "Dễ tiếp cận, cởi mở", B: "Kín đáo, riêng tư" },
  { q: "Khi viết, bạn thích:", a: "N", b: "S", A: "Viết văn chương, sáng tạo", B: "Viết dựa trên số liệu" },
  { q: "Điều gì khó hơn?", a: "F", b: "T", A: "Hiểu và chia sẻ với người khác", B: "Điều khiển người khác" },
  { q: "Bạn mong muốn có thêm điều gì?", a: "T", b: "F", A: "Lý trí, khả năng nhận xét", B: "Tình thương, lòng trắc ẩn" },
  { q: "Lỗi lớn hơn là gì?", a: "P", b: "J", A: "Hành động bừa bãi, không cân nhắc", B: "Hành động chỉ trích, phê phán" },
  { q: "Bạn thích sự kiện nào hơn?", a: "J", b: "P", A: "Có kế hoạch trước", B: "Tự nhiên, ngẫu hứng" },
  { q: "Bạn thường có hành động:", a: "J", b: "P", A: "Cân nhắc thận trọng", B: "Tự nhiên, tự phát" }
];


// 🔢 Random 15 câu mỗi lần làm
function getRandomQuestions(num = 15) {
  const shuffled = fullMbtiQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

// 2️⃣ Mapping MBTI → ngành học tại Việt Nam
const mbtiCareersVN = {
  "INTJ": { desc: "Chiến lược gia – sáng tạo, độc lập, định hướng tương lai.", majors: ["Khoa học máy tính", "Kỹ thuật phần mềm", "Quản trị chiến lược", "Trí tuệ nhân tạo"] },
  "INTP": { desc: "Nhà tư duy logic – tò mò, thích khám phá ý tưởng mới.", majors: ["Công nghệ thông tin", "Toán học", "Vật lý", "Khoa học dữ liệu"] },
  "ENTJ": { desc: "Nhà lãnh đạo bẩm sinh – quyết đoán, định hướng kết quả.", majors: ["Quản trị kinh doanh", "Kinh tế", "Luật", "Quản lý công nghiệp"] },
  "ENTP": { desc: "Người sáng tạo – nhanh nhạy, thích đổi mới.", majors: ["Marketing", "Truyền thông", "Khởi nghiệp", "Công nghệ sáng tạo"] },
  "INFJ": { desc: "Người truyền cảm hứng – sâu sắc, lý tưởng.", majors: ["Tâm lý học", "Giáo dục", "Xã hội học", "Văn học"] },
  "INFP": { desc: "Người mơ mộng – sáng tạo, có lý tưởng và đồng cảm.", majors: ["Thiết kế đồ họa", "Nghệ thuật", "Ngôn ngữ học", "Truyền thông xã hội"] },
  "ENFJ": { desc: "Người lãnh đạo cảm xúc – tận tâm, hướng tới con người.", majors: ["Sư phạm", "Truyền thông", "Quan hệ công chúng", "Quản trị nhân sự"] },
  "ENFP": { desc: "Người nhiệt huyết – sáng tạo, linh hoạt, thích thử thách.", majors: ["Báo chí", "Marketing", "Thiết kế sáng tạo", "Quản trị du lịch"] },
  "ISTJ": { desc: "Người nguyên tắc – đáng tin cậy, logic, có trách nhiệm.", majors: ["Kế toán", "Luật", "Hành chính", "Kỹ thuật cơ khí"] },
  "ISFJ": { desc: "Người tận tụy – chu đáo, kiên định, thực tế.", majors: ["Y dược", "Giáo dục", "Công tác xã hội", "Điều dưỡng"] },
  "ESTJ": { desc: "Người quản lý – tổ chức, lãnh đạo, thực tế.", majors: ["Quản lý", "Kinh tế", "Luật", "Kỹ thuật công nghiệp"] },
  "ESFJ": { desc: "Người hòa đồng – quan tâm, có trách nhiệm xã hội.", majors: ["Y tế cộng đồng", "Sư phạm", "Quản trị dịch vụ", "Du lịch"] },
  "ISTP": { desc: "Người kỹ thuật – thực tế, thích khám phá cơ chế hoạt động.", majors: ["Cơ khí", "Công nghệ ô tô", "Kỹ thuật điện", "Công nghệ thông tin"] },
  "ISFP": { desc: "Người nghệ sĩ – tự do, cảm xúc, tinh tế.", majors: ["Thiết kế thời trang", "Âm nhạc", "Mỹ thuật", "Kiến trúc nội thất"] },
  "ESTP": { desc: "Người hành động – linh hoạt, năng động, thích rủi ro.", majors: ["Kinh doanh", "Thể thao", "Quản trị sự kiện", "Truyền thông"] },
  "ESFP": { desc: "Người trình diễn – vui vẻ, thích giao tiếp, sống hết mình.", majors: ["Nghệ thuật biểu diễn", "Truyền hình", "Du lịch", "Tổ chức sự kiện"] }
};


// 3️⃣ Hàm khởi động quiz
function startMBTIQuiz() {
  const chat = document.getElementById("chat");
  const questions = getRandomQuestions(15);
  let index = 0;
  let scores = { E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0 };

  chat.innerHTML += `
    <div class='msg bot'>
      <div class='bubble'>
        ⚡<b>Sẵn sàng khám phá bản thân chưa?</b><br>
        Chỉ 15 câu hỏi thôi, nhưng kết quả có thể khiến bạn bất ngờ đó 😄
      </div>
    </div>`;

  showQuestion();

  function showQuestion() {
    if (index >= questions.length) return showResult();
    const q = questions[index];
    chat.innerHTML += `
    <div class='msg bot'>
        <div class='bubble'>
        <b>Câu ${index + 1}/${questions.length}:</b><br>${q.q}
        <br>
        <button onclick="chooseMBTI('${q.a}', this)">A. ${q.A}</button>
        <button onclick="chooseMBTI('${q.b}', this)">B. ${q.B}</button>
        </div>
    </div>`;

    chat.scrollTop = chat.scrollHeight;
  }

    window.chooseMBTI = (type, btn) => {
    // tô đậm nút đã chọn
    const buttons = btn.parentElement.querySelectorAll("button");
    buttons.forEach(b => b.disabled = true); // khóa không cho click lại
    btn.classList.add("selected");

    // cộng điểm
    scores[type]++;

    // đợi một chút để người dùng thấy hiệu ứng, rồi sang câu tiếp theo
    setTimeout(() => {
        index++;
        if (index < questions.length) showQuestion();
        else showResult();
    }, 400);
    };


    function showResult() {
    const mbti =
        (scores.E >= scores.I ? "E" : "I") +
        (scores.S >= scores.N ? "S" : "N") +
        (scores.T >= scores.F ? "T" : "F") +
        (scores.J >= scores.P ? "J" : "P");

    const result = mbtiCareersVN[mbti] || { desc: "Không rõ", majors: [] };

    // 🧠 Phân tích chi tiết tính cách (tĩnh, mang tính tư vấn)
    const analysis = {
        "INTJ": {
        traits: "Bạn là người có tư duy chiến lược, độc lập và thích lập kế hoạch dài hạn.",
        strengths: "Tầm nhìn xa, khả năng tổ chức, phân tích logic tốt.",
        weaknesses: "Đôi khi hơi khắt khe, ít linh hoạt với người khác.",
        style: "Thích môi trường học tập rõ ràng, đề cao hiệu quả, học một mình tốt.",
        env: "Phù hợp công việc nghiên cứu, lãnh đạo, quản lý chiến lược."
        },
        "INFP": {
        traits: "Bạn sống cảm xúc, sáng tạo và luôn hướng đến những giá trị nhân văn.",
        strengths: "Giàu lòng trắc ẩn, tưởng tượng phong phú, truyền cảm hứng tốt.",
        weaknesses: "Dễ tổn thương, thiếu thực tế khi gặp áp lực.",
        style: "Thích học qua cảm hứng, làm việc trong không gian tự do, không ép buộc.",
        env: "Hợp với môi trường nghệ thuật, xã hội, nhân văn, giáo dục hoặc truyền thông."
        },
        "ENFP": {
        traits: "Bạn năng động, sáng tạo, lạc quan và luôn tò mò với ý tưởng mới.",
        strengths: "Giao tiếp tốt, sáng tạo, truyền cảm hứng, dễ thích nghi.",
        weaknesses: "Dễ mất tập trung, không thích khuôn khổ.",
        style: "Thích học bằng thảo luận, dự án nhóm, khám phá thực tế.",
        env: "Môi trường năng động, tự do, có cơ hội gặp gỡ và chia sẻ – như marketing, báo chí, sự kiện."
        },
        "ISTJ": {
        traits: "Bạn sống có nguyên tắc, trách nhiệm và đáng tin cậy.",
        strengths: "Kỷ luật, logic, tập trung, làm việc có kế hoạch.",
        weaknesses: "Đôi khi quá cứng nhắc, khó thích nghi với thay đổi.",
        style: "Thích học từng bước, có quy trình rõ ràng, trọng chi tiết.",
        env: "Phù hợp với môi trường hành chính, kế toán, kỹ thuật, quản lý chất lượng."
        },
        "ENTJ": {
        traits: "Bạn là người lãnh đạo bẩm sinh – quyết đoán, định hướng mục tiêu và có năng lực tổ chức.",
        strengths: "Tư duy chiến lược, mạnh mẽ, có khả năng truyền cảm hứng.",
        weaknesses: "Đôi khi quá kiểm soát hoặc thiếu kiên nhẫn.",
        style: "Thích môi trường học tập cạnh tranh, định hướng kết quả, đề cao thành tích.",
        env: "Hợp với môi trường quản trị, khởi nghiệp, kinh doanh, điều hành dự án lớn."
        },
        // (có thể bổ sung thêm các nhóm khác tùy nhu cầu)
    };

    const info = analysis[mbti] || {
        traits: "Bạn sở hữu sự cân bằng độc đáo giữa tư duy và cảm xúc.",
        strengths: "Tư duy linh hoạt, biết lắng nghe, có khả năng thích nghi.",
        weaknesses: "Đôi khi thiếu kiên định hoặc dễ bị ảnh hưởng cảm xúc.",
        style: "Thích môi trường học tập thoải mái, có tính thực tế và nhân văn.",
        env: "Phù hợp với nhiều lĩnh vực, đặc biệt là nghề nghiệp cần giao tiếp và sáng tạo."
    };

    // ✨ Xuất ra nội dung dạng chuyên gia tư vấn
    chat.innerHTML += `
        <div class='msg bot'>
        <div class='bubble'>
            ✅ <b>Kết quả MBTI của bạn:</b> 
            <span style="font-size:18px; color:#0078ff;"><b>${mbti}</b></span><br>
            <i>${result.desc}</i><br><hr>
            <b>🌟 Đặc điểm tính cách:</b><br>${info.traits}<br><br>
            <b>💪 Điểm mạnh:</b><br>${info.strengths}<br><br>
            <b>⚠️ Điểm yếu:</b><br>${info.weaknesses}<br><br>
            <b>🎓 Phong cách học tập & làm việc:</b><br>${info.style}<br><br>
            <b>🏢 Môi trường nghề nghiệp lý tưởng:</b><br>${info.env}<br><br>
            <b>📚 Ngành học gợi ý tại Việt Nam:</b><br>
            ${result.majors.map(m => "🎯 " + m).join("<br>")}
        </div>
        </div>
    `;

    chat.scrollTop = chat.scrollHeight;
    }

}
