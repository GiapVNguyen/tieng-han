// Dữ liệu bài học Giáo trình Tiếng Hàn Seoul (Seoul National University Korean)
// Hệ thống hỗ trợ bài học Seoul 3A và Seoul 3B

window.KOREAN_COURSES = {
  "3b": {
    name: "Seoul Korean 3B",
    description: "Giáo trình Tiếng Hàn Seoul Trung cấp 3B",
    lessons: {
      "10": {
        id: "10",
        course: "3b",
        titleKo: "결혼하려면 아직 멀었어요",
        titleVi: "Còn lâu mới kết hôn",
        topic: "결혼과 인생 계획 (Hôn nhân & Kế hoạch cuộc đời)",
        summary: "Học cách diễn đạt dự định, điều kiện mục đích -(으)려면, diễn tả mốc thời gian còn xa -(으)려면 멀었다 và hồi tưởng trải nghiệm -더라고요.",
        
        // --- 1. NGỮ PHÁP TRỌNG TÂM ---
        grammar: [
          {
            id: "g1",
            title: "-(으)려면",
            meaning: "Nếu muốn... thì (phải / nên / cần)...",
            explanation: "Là dạng rút gọn của '-(으)려고 하면', diễn tả một giả định mục đích hoặc ý định. Vế trước là mục đích muốn đạt được, vế sau thường đi kèm với các biểu hiện mang tính bắt buộc, khuyên nhủ hoặc điều kiện cần thiết như: -아/어야 하다/되다 (phải), -(으)세요 (hãy), -(으)면 좋다 (nếu... thì tốt), -(으)ㄹ 필요가 있다 (cần thiết).",
            conjugation: [
              { type: "Động từ kết thúc bằng Nguyên âm hoặc 'ㄹ'", rule: "+ -려면", example: "가다 → 가려면, 만들다 → 만들려면, 살다 → 살려면" },
              { type: "Động từ kết thúc bằng Phụ âm (có patchim)", rule: "+ -으려면", example: "먹다 → 먹으려면, 읽다 → 읽으려면, 찾다 → 찾으려면" },
              { type: "Bất quy tắc ㄷ, ㅂ, ㅅ", rule: "Biến đổi patchim trước khi cộng", example: "듣다 → 들으려면, 돕다 → 도우려면, 짓다 → 지으려면" }
            ],
            notes: "Khác với '-(으)려고' (chỉ mục đích đơn thuần, vế sau KHÔNG dùng câu mệnh lệnh hay rủ rê), vế sau của '-(으)려면' thường xuyên dùng câu khuyên bảo hoặc chỉ ra điều kiện tiên quyết.",
            examples: [
              { ko: "한국 회사에 취업하려면 한국어 말하기를 잘해야 해요.", vi: "Nếu muốn xin việc vào công ty Hàn Quốc thì phải nói tiếng Hàn thật tốt." },
              { ko: "좋은 집을 구하려면 발품을 많이 팔아야 해요.", vi: "Nếu muốn tìm được căn nhà ưng ý thì phải chịu khó đi xem nhiều nơi." },
              { ko: "건강을 유지하려면 매일 꾸준히 운동을 하세요.", vi: "Nếu muốn duy trì sức khỏe thì hãy tập thể dục đều đặn mỗi ngày." }
            ],
            quickQuiz: {
              question: "한국에서 좋은 직장을 (구하다) _____ 자격증을 따야 합니다.",
              questionVi: "Nếu muốn tìm được công việc tốt ở Hàn Quốc thì phải lấy chứng chỉ.",
              options: ["구하려고", "구하려면", "구하니까", "구하는데"],
              correctIndex: 1,
              explanation: "Vế sau có '자격증을 따야 합니다' (phải lấy chứng chỉ) thể hiện điều kiện bắt buộc để đạt mục đích, nên dùng '구하려면'."
            }
          },
          {
            id: "g2",
            title: "-(으)려면 멀었다",
            meaning: "Còn lâu mới... / Còn xa mới tới lúc...",
            explanation: "Dùng để diễn tả một mục tiêu, kế hoạch hoặc thời điểm nào đó còn ở rất xa trong tương lai, cần nhiều thời gian hoặc nỗ lực nữa mới có thể đạt được. Thường đi kèm với '아직' (vẫn còn).",
            conjugation: [
              { type: "Động từ không patchim hoặc có 'ㄹ'", rule: "+ -려면 멀다 (멀었어요)", example: "결혼하다 → 결혼하려면 멀었어요, 졸업하다 → 졸업하려면 멀었어요" },
              { type: "Động từ có patchim", rule: "+ -으려면 멀다 (멀었어요)", example: "끝나다 → 끝나려면 멀었어요, 도착하다 → 도착하려면 멀었어요" }
            ],
            notes: "Cũng có thể dùng dạng quá khứ '멀었습니다 / 멀었어요' để nhấn mạnh khoảng cách hiện tại so với mục tiêu.",
            examples: [
              { ko: "A: 언제 결혼해요? — B: 결혼하려면 아직 멀었어요. 돈부터 모아야 해요.", vi: "A: Khi nào bạn kết hôn? — B: Còn lâu mới cưới. Phải gom tiền trước đã." },
              { ko: "A: 한국어 실력이 많이 늘었네요! — B: 아니에요. 한국 사람처럼 말하려면 아직 멀었어요.", vi: "A: Trình độ tiếng Hàn tiến bộ nhiều nhỉ! — B: Đâu có, muốn nói như người Hàn thì còn xa lắm." },
              { ko: "퇴근 시간이 되려면 아직 두 시간이나 남았어요.", vi: "Còn tận 2 tiếng nữa mới đến giờ tan làm." }
            ],
            quickQuiz: {
              question: "A: '보고서 다 썼어요?' — B: '아니요, 자료가 부족해서 다 _____ 아직 멀었어요.'",
              questionVi: "A: 'Viết xong báo cáo chưa?' — B: 'Chưa, vì thiếu tài liệu nên còn lâu mới viết xong.'",
              options: ["쓰면", "쓰느라고", "쓰려면", "쓰도록"],
              correctIndex: 2,
              explanation: "Đi với '아직 멀었어요' để diễn tả việc hoàn thành báo cáo còn lâu mới xong, dùng '쓰려면 아직 멀었어요'."
            }
          },
          {
            id: "g3",
            title: "-더라고(요)",
            meaning: "Tôi thấy rằng... / Hóa ra là... / Nghe/nhận ra là...",
            explanation: "Dùng khi người nói hồi tưởng và chia sẻ lại cho người nghe về một sự thật, tình huống hoặc trải nghiệm mà chính bản thân đã trực tiếp chứng kiến, cảm nhận hoặc trải qua trong quá khứ.",
            conjugation: [
              { type: "Động từ & Tính từ", rule: "+ -더라고요", example: "크다 → 크더라고요, 맛있다 → 맛있더라고요, 가다 → 가더라고요" },
              { type: "Danh từ", rule: "+ (이)더라고요", example: "학생 → 학생이더라고요, 의사 → 의사더라고요" },
              { type: "Thì quá khứ (đã hoàn thành)", rule: "+ -았/었더라고요", example: "이미 떠났다 → 이미 떠났더라고요" }
            ],
            notes: "Chủ ngữ của câu kể trực tiếp không được là ngôi thứ nhất 'tôi' (trừ khi nói về cảm xúc nội tâm trong quá khứ của chính mình). Dùng để chia sẻ thông tin mới mẻ đối với người nghe.",
            examples: [
              { ko: "지난 주말에 친구 결혼식에 갔는데 신랑 신부가 정말 잘 어울리더라고요.", vi: "Cuối tuần trước tôi đi đám cưới bạn, thấy cô dâu chú rể thật sự rất đẹp đôi." },
              { ko: "한국에서 신혼집을 구하는 게 생각보다 어렵더라고요.", vi: "Tôi thấy việc tìm nhà tân hôn ở Hàn Quốc khó hơn tôi tưởng nhiều." },
              { ko: "민호 씨 약혼녀를 만나 봤는데 성격이 정말 밝더라고요.", vi: "Tôi đã gặp vợ sắp cưới của Minho rồi, tính tình cô ấy rất hoạt bát, vui vẻ." }
            ],
            quickQuiz: {
              question: "어제 새로 생긴 한국 식당에 가 봤는데 음식이 정말 _____.",
              questionVi: "Hôm qua tôi có ghé nhà hàng Hàn Quốc mới mở, đồ ăn thấy thật sự rất ngon.",
              options: ["맛있더라고요", "맛있으려면", "맛있기 때문에", "맛있으니까"],
              correctIndex: 0,
              explanation: "Hồi tưởng lại trải nghiệm thực tế hôm qua khi đến ăn tại nhà hàng, dùng '-더라고요'."
            }
          }
        ],

        // --- 2. TỪ VỰNG THEO CHỦ ĐỀ & FLASHCARD ---
        vocabulary: [
          {
            category: "Chuẩn bị hôn nhân (결혼 준비)",
            words: [
              {
                ko: "결혼식",
                hanja: "結婚式",
                en: "wedding ceremony",
                vi: "lễ cưới, đám cưới",
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80",
                examples: [
                  { ko: "다음 달에 친한 친구 결혼식에 참석할 예정이에요.", vi: "Tháng sau tôi dự định sẽ tham dự lễ cưới của một người bạn thân." },
                  { ko: "결혼식을 호텔 예식장에서 아주 성대하게 올렸어요.", vi: "Hôn lễ đã được tổ chức rất long trọng tại hội trường tiệc cưới khách sạn." }
                ]
              },
              {
                ko: "청첩장",
                hanja: "請牒狀",
                en: "wedding invitation card",
                vi: "thiệp mời cưới",
                examples: [
                  { ko: "친구들에게 직접 만나서 청첩장을 돌렸어요.", vi: "Tôi đã gặp mặt trực tiếp bạn bè để phát thiệp mời cưới." },
                  { ko: "청첩장 디자인이 깔끔하고 세련돼서 마음에 들어요.", vi: "Mẫu thiết kế thiệp cưới vừa trang nhã vừa tinh tế nên tôi rất ưng ý." }
                ]
              },
              {
                ko: "예식장",
                hanja: "禮式場",
                en: "wedding hall",
                vi: "hội trường cưới, trung tâm tiệc cưới",
                examples: [
                  { ko: "인기 있는 예식장은 적어도 반년 전에는 예약해야 해요.", vi: "Hội trường cưới nổi tiếng thì phải đặt chỗ trước ít nhất nửa năm." },
                  { ko: "지하철역에서 가까운 예식장을 잡아서 손님들이 오기 편해요.", vi: "Chúng tôi đã chọn hội trường cưới gần ga tàu điện ngầm nên khách đến rất tiện." }
                ]
              },
              {
                ko: "상견례",
                hanja: "相見禮",
                en: "formal meeting between both families",
                vi: "lễ ra mắt hai bên gia đình",
                examples: [
                  { ko: "지난주에 조용한 한정식집에서 양가 상견례를 마쳤어요.", vi: "Tuần trước chúng tôi đã hoàn tất lễ ra mắt hai họ tại một quán ăn truyền thống yên tĩnh." },
                  { ko: "양가 부모님을 처음 뵙는 상견례 자리라 무척 긴장되었어요.", vi: "Vì là buổi ra mắt gặp bố mẹ hai bên lần đầu nên tôi đã vô cùng hồi hộp." }
                ]
              },
              {
                ko: "신혼여행",
                hanja: "新婚旅行",
                en: "honeymoon trip",
                vi: "chuyến du lịch tuần trăng mật",
                examples: [
                  { ko: "신혼여행지로 따뜻하고 경치 좋은 휴양지를 알아보고 있어요.", vi: "Chúng tôi đang tìm hiểu điểm trăng mật là một khu nghỉ dưỡng ấm áp và cảnh đẹp." },
                  { ko: "결혼식을 마치자마자 곧바로 신혼여행을 떠났어요.", vi: "Vừa xong đám cưới là đôi vợ chồng trẻ đã lên đường đi tuần trăng mật ngay." }
                ]
              },
              {
                ko: "신혼집",
                hanja: "新婚집",
                en: "newlyweds' home",
                vi: "nhà tân hôn",
                examples: [
                  { ko: "두 사람의 직장 중간쯤에 아늑한 신혼집을 마련했어요.", vi: "Chúng tôi đã chuẩn bị một căn nhà tân hôn ấm cúng ở khoảng giữa chỗ làm của hai người." },
                  { ko: "요즘은 집값이 너무 비싸서 신혼집 구하기가 정말 어려워요.", vi: "Dạo này giá nhà đắt đỏ quá nên việc tìm mua nhà tân hôn thật sự rất khó." }
                ]
              },
              {
                ko: "혼수",
                hanja: "婚需",
                en: "marriage articles / wedding household items",
                vi: "đồ sính lễ, đồ dùng mua sắm cho tổ ấm mới",
                examples: [
                  { ko: "신혼집에 들어갈 혼수를 장만하느라 주말마다 바빠요.", vi: "Cuối tuần nào tôi cũng bận rộn vì phải sắm sửa đồ dùng nội thất cho nhà mới." },
                  { ko: "혼수 비용 부담을 줄이기 위해 꼭 필요한 가전제품만 샀어요.", vi: "Để giảm bớt gánh nặng chi phí sắm sửa, chúng tôi chỉ mua các thiết bị điện máy thiết yếu." }
                ]
              },
              {
                ko: "주례",
                hanja: "主禮",
                en: "marriage officiant / presider",
                vi: "chủ hôn (người chủ trì nghi thức lễ cưới)",
                examples: [
                  { ko: "존경하는 대학교 은사님께 주례를 정중히 부탁드렸어요.", vi: "Tôi đã trịnh trọng kính nhờ người thầy đại học đáng kính làm chủ hôn cho lễ cưới." },
                  { ko: "요즘 젊은 부부들은 주례 없는 결혼식을 선호하기도 해요.", vi: "Nhiều cặp vợ chồng trẻ ngày nay lại ưa chuộng kiểu đám cưới không cần chủ hôn." }
                ]
              }
            ]
          },
          {
            category: "Kế hoạch cuộc đời & Cuộc sống độc lập (인생 계획 & 독립)",
            words: [
              {
                ko: "자리를 잡다",
                hanja: "",
                en: "to settle down / establish oneself",
                vi: "ổn định công việc, có chỗ đứng vững vàng",
                examples: [
                  { ko: "직장에서 어느 정도 자리를 잡은 후에 결혼하고 싶어요.", vi: "Tôi muốn ổn định vị trí ở công ty thêm một thời gian rồi mới tính đến chuyện kết hôn." },
                  { ko: "그는 끊임없는 노력 끝에 업계에서 확고하게 자리를 잡았어요.", vi: "Sau bao nỗ lực không ngừng nghỉ, anh ấy đã tạo dựng được chỗ đứng vững chắc trong ngành." }
                ]
              },
              {
                ko: "돈을 모으다",
                hanja: "",
                en: "to save up money",
                vi: "tiết kiệm tiền, tích lũy tiền bạc",
                examples: [
                  { ko: "내 집 마련을 목표로 매달 월급의 절반을 저축하며 돈을 모아요.", vi: "Với mục tiêu tậu được nhà riêng, mỗi tháng tôi đều trích một nửa lương để gom tiền." },
                  { ko: "목돈을 모으려면 평소에 작은 낭비부터 줄여야 해요.", vi: "Nếu muốn tích lũy được khoản tiền lớn thì thường ngày phải cắt giảm những khoản lãng phí nhỏ." }
                ]
              },
              {
                ko: "독립하다",
                hanja: "獨立하다",
                en: "to become independent / move out",
                vi: "tự lập, dọn ra ở riêng",
                examples: [
                  { ko: "대학교를 졸업하고 취직하면서 부모님 곁을 떠나 독립했어요.", vi: "Sau khi tốt nghiệp đại học và đi làm, tôi đã dọn ra ở riêng tự lập khỏi bố mẹ." },
                  { ko: "경제적으로 완전히 독립하려면 스스로 생활비를 감당해야 해요.", vi: "Muốn hoàn toàn độc lập về kinh tế thì phải tự mình gánh vác mọi sinh hoạt phí." }
                ]
              },
              {
                ko: "취업하다",
                hanja: "就業하다",
                en: "to get a job / find employment",
                vi: "xin được việc làm, vào làm việc",
                examples: [
                  { ko: "오랜 구직 활동 끝에 원하던 무역 회사에 드디어 취업했어요.", vi: "Sau chuỗi ngày dài tìm việc, cuối cùng tôi cũng được nhận vào công ty thương mại mơ ước." },
                  { ko: "외국계 기업에 취업하려면 어학 점수와 실무 경험이 중요해요.", vi: "Nếu muốn xin vào công ty có vốn nước ngoài thì điểm ngoại ngữ và kinh nghiệm thực tế rất quan trọng." }
                ]
              },
              {
                ko: "계획을 세우다",
                hanja: "計劃을 세우다",
                en: "to make a plan",
                vi: "lập kế hoạch",
                examples: [
                  { ko: "새해가 되면 한 해 동안 실천할 구체적인 계획을 세워요.", vi: "Cứ mỗi dịp năm mới sang, tôi lại lập ra những kế hoạch cụ thể để thực hiện suốt cả năm." },
                  { ko: "시간을 낭비하지 않으려면 하루 일과 계획을 꼼꼼히 세워야 해요.", vi: "Nếu không muốn lãng phí thời gian thì phải lên kế hoạch kỹ càng cho từng công việc trong ngày." }
                ]
              },
              {
                ko: "마련하다",
                hanja: "",
                en: "to prepare / arrange / purchase",
                vi: "chuẩn bị, sắm sửa, tậu (nhà cửa, đồ đạc)",
                examples: [
                  { ko: "열심히 일해서 드디어 가족과 함께 살 아파트를 마련했어요.", vi: "Làm việc chăm chỉ, cuối cùng tôi đã tậu được căn hộ chung cư để cùng sống với gia đình." },
                  { ko: "멀리서 찾아온 손님을 위해 정성껏 식사를 마련했어요.", vi: "Tôi đã chu đáo chuẩn bị một bữa cơm thịnh soạn để chiêu đãi người bạn từ phương xa tới." }
                ]
              },
              {
                ko: "안정되다",
                hanja: "安定되다",
                en: "to become stable / settled",
                vi: "trở nên ổn định, vững chắc",
                examples: [
                  { ko: "수입이 안정되니까 미래에 대한 불안감이 훨씬 줄어들었어요.", vi: "Khi thu nhập dần đi vào ổn định, nỗi bất an về tương lai đã giảm đi rất nhiều." },
                  { ko: "치료를 꾸준히 받아서 환자의 건강 상태가 많이 안정되었어요.", vi: "Được điều trị đều đặn nên tình trạng sức khỏe của bệnh nhân đã ổn định hơn nhiều." }
                ]
              },
              {
                ko: "적성에 맞다",
                hanja: "適性에 맞다",
                en: "to suit one's aptitude",
                vi: "hợp với tố chất, năng khiếu của mình",
                examples: [
                  { ko: "지금 하는 일이 제 적성에 아주 잘 맞아서 매일 출근하는 게 즐거워요.", vi: "Công việc hiện tại rất hợp năng khiếu nên mỗi ngày đi làm đối với tôi đều là một niềm vui." },
                  { ko: "직업을 선택할 때는 연봉도 중요하지만 적성에 맞는지 먼저 고려해야 해요.", vi: "Khi chọn nghề, lương bổng tuy quan trọng nhưng trước hết phải xem có hợp tố chất của mình không." }
                ]
              }
            ]
          },
          {
            category: "Tâm lý & Tình huống (심리 및 표현)",
            words: [
              {
                ko: "부담스럽다",
                hanja: "負擔스럽다",
                en: "to feel burdened / pressured",
                vi: "cảm thấy áp lực, nặng nề, gánh nặng",
                examples: [
                  { ko: "결혼식 준비 비용이 생각했던 예산보다 훨씬 많이 들어 부담스러워요.", vi: "Chi phí chuẩn bị đám cưới vượt quá ngân sách dự kiến nên tôi cảm thấy rất áp lực." },
                  { ko: "친하지 않은 사람에게 너무 값비싼 선물을 받으면 다소 부담스러워요.", vi: "Nhận món quà quá đắt tiền từ người chưa thân thiết thì cảm thấy khá là ngượng ngùng và gánh nặng." }
                ]
              },
              {
                ko: "부럽다",
                hanja: "",
                en: "to be envious / admire",
                vi: "ngưỡng mộ, ghen tị (tích cực)",
                examples: [
                  { ko: "여유롭게 세계 여행을 다니며 사는 친구를 보면 정말 부러워요.", vi: "Nhìn người bạn sống thảnh thơi đi du lịch khắp thế giới, tôi thật sự rất ngưỡng mộ." },
                  { ko: "자신이 좋아하는 일을 직업으로 가진 사람이 가장 부러워요.", vi: "Tôi ngưỡng mộ nhất là những người biến được niềm đam mê thành nghề nghiệp mưu sinh." }
                ]
              },
              {
                ko: "서두르다",
                hanja: "",
                en: "to rush / hurry",
                vi: "vội vàng, gấp gáp, giục giã",
                examples: [
                  { ko: "주말에는 예식장이 붐비니까 서둘러서 출발해야 늦지 않아요.", vi: "Cuối tuần hội trường cưới đông đúc lắm nên phải khẩn trương xuất phát kẻo muộn." },
                  { ko: "인생의 중대한 결정을 내릴 때는 너무 서두르지 않는 것이 좋아요.", vi: "Khi đưa ra những quyết định hệ trọng của cuộc đời thì tốt nhất không nên quá vội vàng." }
                ]
              },
              {
                ko: "미루다",
                hanja: "",
                en: "to postpone / put off",
                vi: "trì hoãn, hoãn lại sang lúc khác",
                examples: [
                  { ko: "오늘 해야 할 중요한 공부를 자꾸 내일로 미루지 마세요.", vi: "Đừng có liên tục trì hoãn việc học quan trọng hôm nay sang tận ngày mai." },
                  { ko: "경제적인 사정 때문에 결혼식을 내년 봄으로 미루기로 했어요.", vi: "Vì điều kiện kinh tế nên chúng tôi đã quyết định dời ngày cưới sang mùa xuân năm sau." }
                ]
              },
              {
                ko: "혼기가 차다",
                hanja: "婚期가 차다",
                en: "to reach marriageable age",
                vi: "đến tuổi cập kê / đến tuổi kết hôn",
                examples: [
                  { ko: "나이가 서른을 넘고 혼기가 차니 친척들이 결혼 이야기를 자주 꺼내요.", vi: "Tuổi đã ngoài ba mươi và đến tuổi lập gia đình nên họ hàng cứ hay nhắc đến chuyện cưới xin." },
                  { ko: "혼기가 찼다고 해서 조급한 마음에 서둘러 결혼할 필요는 없어요.", vi: "Dù đã đến tuổi cập kê thì cũng không việc gì phải nóng vội cưới vội cưới vàng." }
                ]
              }
            ]
          }
        ],

        // --- 3. ĐỐI THOẠI & LUYỆN NGHE ---
        dialogues: [
          {
            title: "대화 1 · Minho và Jisu trò chuyện về chuyện kết hôn",
            audioText: "민호 씨, 이번 주말에 영수 씨 결혼식에 갈 거지요? 네, 가야지요. 영수 씨가 벌써 결혼을 하다니 믿기지 않아요. 그러게요. 민호 씨는 결혼할 계획이 아직 없어요? 저요? 저는 결혼하려면 아직 멀었어요. 왜요? 요즘 좋은 사람 만난다고 들었는데요. 만나는 사람은 있지만, 결혼하려면 먼저 직장에서 자리도 잡고 돈도 더 모아야 하거든요. 하긴 요즘은 신혼집 마련하는 것도 보통 일이 아니더라고요. 맞아요. 그래서 서두르지 않고 차근차근 준비하려고요.",
            lines: [
              { speaker: "지수", ko: "민호 씨, 이번 주말에 영수 씨 결혼식에 갈 거지요?", vi: "Minho à, cuối tuần này anh có đi đám cưới anh Youngsoo không?" },
              { speaker: "민호", ko: "네, 가야지요. 영수 씨가 벌써 결혼을 하다니 믿기지 않아요.", vi: "Có chứ, phải đi chứ. Youngsoo đã cưới rồi cơ à, thật khó tin ghê." },
              { speaker: "지수", ko: "그러게요. 민호 씨는 결혼할 계획이 아직 없어요?", vi: "Công nhận đấy. Minho vẫn chưa có kế hoạch kết hôn à?" },
              { speaker: "민호", ko: "저요? 저는 결혼하려면 아직 멀었어요.", vi: "Tôi á? Tôi thì còn lâu mới cưới được." },
              { speaker: "지수", ko: "왜요? 요즘 좋은 사람 만난다고 들었는데요.", vi: "Sao thế? Dạo này tôi nghe bảo anh đang quen người tốt lắm mà." },
              { speaker: "민호", ko: "만나는 사람은 있지만, 결혼하려면 먼저 직장에서 자리도 잡고 돈도 더 모아야 하거든요.", vi: "Người yêu thì có rồi, nhưng nếu muốn cưới thì trước hết phải ổn định công việc và tiết kiệm thêm tiền nữa." },
              { speaker: "지수", ko: "하긴 요즘은 신혼집 마련하는 것도 보통 일이 아니더라고요.", vi: "Cũng phải, dạo này tôi thấy việc chuẩn bị nhà tân hôn cũng chẳng phải chuyện vừa đâu." },
              { speaker: "민호", ko: "맞아요. 그래서 서두르지 않고 차근차근 준비하려고요.", vi: "Đúng thế. Vì vậy tôi định không vội mà cứ chuẩn bị từng bước một thôi." }
            ],
            comprehension: [
              {
                question: "민호 씨는 왜 아직 결혼할 계획이 없다고 했습니까?",
                options: [
                  "만나는 사람이 전혀 없어서",
                  "직장에서 자리를 잡고 돈을 더 모아야 해서",
                  "부모님이 결혼을 반대하셔서",
                  "해외로 유학을 갈 예정이라서"
                ],
                correctIndex: 1,
                explanation: "Minho nói: '결혼하려면 먼저 직장에서 자리도 잡고 돈도 더 모아야 하거든요.'"
              },
              {
                question: "지수 씨가 말한 '보통 일이 아니더라고요'의 의미로 알맞은 것은?",
                options: [
                  "아주 쉽고 간단한 일이다",
                  "누구나 다 하는 흔한 일이다",
                  "생각보다 어렵고 부담스러운 일이다",
                  "별로 중요하지 않은 일이다"
                ],
                correctIndex: 2,
                explanation: "'보통 일이 아니다' là thành ngữ chỉ việc rất khó khăn, không hề đơn giản."
              }
            ]
          },
          {
            title: "대화 2 · Michael và Yuna nói về việc chuẩn bị đám cưới",
            audioText: "유나 씨, 요즘 결혼 준비하느라 많이 바쁘지요? 네, 신경 쓸 게 한두 가지가 아니에요. 지난주에 상견례를 끝냈는데 정말 긴장되더라고요. 이제 예식장도 잡고 청첩장도 돌려야겠네요? 네, 인기 있는 예식장을 예약하려면 적어도 6개월 전에는 서둘러야 하더라고요. 겨우 마음에 드는 곳을 잡았어요. 신혼여행지는 결정했어요? 제주도로 가기로 했어요. 요즘 해외로 나가려면 준비할 것도 많고 비행기표도 비싸서요. 잘 생각하셨네요. 힘들겠지만 하나씩 잘 준비해 보세요!",
            lines: [
              { speaker: "마이클", ko: "유나 씨, 요즘 결혼 준비하느라 많이 바쁘지요?", vi: "Yuna ơi, dạo này bạn bận rộn chuẩn bị đám cưới lắm đúng không?" },
              { speaker: "유나", ko: "네, 신경 쓸 게 한두 가지가 아니에요. 지난주에 상견례를 끝냈는데 정말 긴장되더라고요.", vi: "Vâng, có đủ thứ việc phải bận tâm. Tuần trước em vừa làm lễ ra mắt hai họ xong, công nhận hồi hộp ghê cơ." },
              { speaker: "마이클", ko: "이제 예식장도 잡고 청첩장도 돌려야겠네요?", vi: "Thế giờ chắc phải đặt nhà hàng tiệc cưới rồi gửi thiệp mời nhỉ?" },
              { speaker: "유나", ko: "네, 인기 있는 예식장을 예약하려면 적어도 6개월 전에는 서둘러야 하더라고요. 겨우 마음에 드는 곳을 잡았어요.", vi: "Dạ vâng, nếu muốn đặt được hội trường cưới hot thì phải nhanh tay trước ít nhất 6 tháng lận. Mãi em mới giữ được chỗ ưng ý đấy." },
              { speaker: "마이클", ko: "신혼여행지는 결정했어요?", vi: "Thế đã chốt điểm đi tuần trăng mật chưa?" },
              { speaker: "유나", ko: "제주도로 가기로 했어요. 요즘 해외로 나가려면 준비할 것도 많고 비행기표도 비싸서요.", vi: "Tụi em quyết định đi đảo Jeju. Dạo này nếu muốn ra nước ngoài thì vừa nhiều thủ tục mà vé máy bay cũng đắt nữa." },
              { speaker: "마이클", ko: "잘 생각하셨네요. 힘들겠지만 하나씩 잘 준비해 보세요!", vi: "Tính thế chuẩn đấy. Dù vất vả nhưng hãy chuẩn bị thật chu đáo từng bước nhé!" }
            ],
            comprehension: [
              {
                question: "유나 씨는 왜 신혼여행지를 제주도로 정했습니까?",
                options: [
                  "해외여행을 원래 싫어해서",
                  "해외로 나가려면 준비할 것도 많고 비행기표도 비싸서",
                  "제주도에 친척 집이 있어서",
                  "휴가 기간이 하루밖에 안 돼서"
                ],
                correctIndex: 1,
                explanation: "Yuna nói: '요즘 해외로 나가려면 준비할 것도 많고 비행기표도 비싸서요.'"
              }
            ]
          }
        ],

        // --- 4. LUYỆN NÓI (SPEAKING) ---
        speaking: {
          title: "Nói về Mục tiêu và Kế hoạch Cuộc đời",
          guide: "Hãy thực hành trả lời 3 câu hỏi dưới đây trong vòng 1-2 phút. Hãy sử dụng mẫu câu '-(으)려면' và '-더라고요' ít nhất một lần.",
          prompts: [
            "1. 앞으로 3년 안에 꼭 이루고 싶은 인생의 목표는 무엇입니까? (Trong 3 năm tới, mục tiêu cuộc đời quan trọng nhất bạn muốn đạt được là gì?)",
            "2. 그 목표를 이루려면 지금부터 무엇을 준비해야 합니까? (Nếu muốn đạt được mục tiêu đó thì từ bây giờ phải chuẩn bị những gì?)",
            "3. 혼자 독립하거나 결혼하는 것에 대해 어떻게 생각합니까? (Bạn nghĩ thế nào về việc sống độc lập hoặc kết hôn?)"
          ],
          sampleAnswer: "저는 앞으로 3년 안에 제 전공 분야에서 전문성을 인정받고, 회사에서 자리를 잡고 싶습니다. 자리를 잡으려면 매일 업무 관련 지식을 꾸준히 공부하고 외국어 실력도 더 키워야 합니다. 그리고 독립하려면 먼저 신혼집이나 방을 구할 수 있는 보증금을 모아야 하더라고요. 그래서 올해부터는 불필요한 지출을 줄이고 매달 꾸준히 저축하려고 합니다."
        },

        // --- 5. ĐỌC HIỂU & VIẾT (READING & WRITING) ---
        reading: {
          title: "Đọc hiểu: Thay đổi trong nhận thức về hôn nhân của giới trẻ Hàn Quốc",
          passage: "과거 한국 사회에서는 혼기가 차면 당연히 결혼을 해야 한다고 생각했습니다. 하지만 요즘 20대와 30대 젊은 층에서는 '결혼은 필수가 아니라 선택'이라고 생각하는 사람들이 크게 늘어났습니다. 실제로 통계청 조사에 따르면, 결혼하지 않고 혼자 사는 1인 가구의 비율이 계속 증가하고 있습니다.\n\n젊은이들이 결혼을 미루거나 포기하는 가장 큰 이유는 경제적인 부담 때문입니다. 특히 서울과 수도권에서 신혼집을 마련하려면 수억 원의 돈이 필요하기 때문에 부모님의 도움 없이는 결혼하기가 매우 어렵더라고요. 또한 취업 경쟁이 치열해지면서 안정된 일자리를 구하는 시기가 늦어지는 것도 큰 원인 중 하나입니다. 전문가들은 청년들이 안심하고 가정을 꾸리려면 주거 지원과 안정적인 일자리 정책이 시급하다고 지적합니다.",
          questions: [
            {
              question: "요즘 한국 젊은이들이 결혼을 미루는 가장 큰 이유는 무엇입니까?",
              options: [
                "결혼식 문화가 재미없어서",
                "신혼집 마련과 경제적인 부담 때문에",
                "해외여행을 자유롭게 다니기 위해서",
                "부모님이 결혼을 허락하지 않아서"
              ],
              correctIndex: 1,
              explanation: "Bài đọc nêu: '젊은이들이 결혼을 미루거나 포기하는 가장 큰 이유는 경제적인 부담 때문입니다. 특히 ... 신혼집을 마련하려면...'"
            },
            {
              question: "청년들이 가정을 꾸리기 위해 전문가들이 제안한 해결책은 무엇입니까?",
              options: [
                "결혼식을 생략하도록 법을 만든다.",
                "청년 주거 지원과 안정적인 일자리 정책을 마련한다.",
                "모든 청년에게 의무적으로 적금을 들게 한다.",
                "결혼하는 연령을 법으로 제한한다."
              ],
              correctIndex: 1,
              explanation: "Câu cuối bài: '청년들이 안심하고 가정을 꾸리려면 주거 지원과 안정적인 일자리 정책이 시급하다고 지적합니다.'"
            }
          ]
        },

        writing: {
          title: "Viết luận: Kế hoạch trong tương lai của bạn (나의 미래 계획)",
          guide: "Hãy viết một đoạn văn ngắn khoảng 5-7 câu tiếng Hàn nói về mục tiêu trong 1-3 năm tới của bạn. Dùng các cấu trúc -(으)려면, 자리를 잡다, 돈을 모으다.",
          frame: [
            "저는 앞으로 ___년 안에 꼭 ___고 싶습니다.",
            "이 목표를 이루려면 먼저 ___아/어야 합니다.",
            "또한 혼자 자리를 잡으려면 ___도 필요하더라고요.",
            "그래서 이번 달부터는 ___부터 시작하려고 합니다."
          ],
          sampleAnswer: "저는 앞으로 2년 안에 원하는 회사에 취업해서 제 분야에서 자리를 잡고 싶습니다. 취업에 성공하려면 지금부터 전공 자격증을 따고 한국어 말하기 시험도 최고 등급을 받아야 합니다. 또한 독립해서 혼자 살려면 매달 생활비를 스스로 감당할 수 있어야 하더라고요. 그래서 이번 달부터는 아르바이트를 하며 저축하는 습관을 들이고, 시간 관리를 철저히 하려고 합니다."
        }
      },

      "11": {
        id: "11",
        course: "3b",
        titleKo: "언제든지 일할 수 있어요",
        titleVi: "Có thể làm việc bất cứ lúc nào",
        topic: "구직과 아르바이트 (Tìm việc & Việc làm thêm)",
        summary: "Học cách diễn đạt sự lựa chọn tự do -(이)든지, đánh giá mức độ đáng giá -(으)ㄹ 만하다 và cấu trúc tiến triển tỷ lệ thuận -(으)ㄹ 수록.",
        
        grammar: [
          {
            id: "g1",
            title: "-(이)든지",
            meaning: "Bất cứ... (khi nào, ai, cái gì, ở đâu)... cũng được",
            explanation: "Gắn sau từ nghi vấn (언제, 누구, 어디, 무엇, 어떻게) hoặc nối giữa các danh từ/động từ để diễn đạt sự lựa chọn tự do, không hạn chế hoặc điều kiện nào cũng thỏa mãn.",
            conjugation: [
              { type: "Đại từ nghi vấn", rule: "언제든지 (bất cứ khi nào), 어디든지 (bất cứ đâu), 누구든지 (bất cứ ai), 무엇이든지 / 뭐든지 (bất cứ thứ gì)" },
              { type: "Danh từ", rule: "Patchim + 이든지 / Không patchim + 든지", example: "커피든지 차든지 (cà phê hay trà đều được)" },
              { type: "Động từ / Tính từ", rule: "+ -든지", example: "가든지 말든지 (đi hay không tùy bạn)" }
            ],
            notes: "Tránh nhầm với '-던지' (chỉ hồi tưởng nguyên nhân trong quá khứ). '-든지' luôn mang ý nghĩa lựa chọn (선택).",
            examples: [
              { ko: "평일이든 주말이든 언제든지 연락 주셔도 됩니다.", vi: "Dù ngày thường hay cuối tuần, anh có thể liên hệ bất cứ lúc nào cũng được ạ." },
              { ko: "한국 문화에 관심이 있는 사람이면 누구든지 참여할 수 있어요.", vi: "Hễ là người quan tâm đến văn hóa Hàn Quốc thì bất cứ ai cũng có thể tham gia." },
              { ko: "먹고 싶은 음식이 있으면 뭐든지 편하게 말씀하세요.", vi: "Nếu có món gì muốn ăn thì bất cứ món nào cũng cứ thoải mái nói nhé." }
            ],
            quickQuiz: {
              question: "궁금한 점이 있으면 주저하지 말고 _____ 물어보세요.",
              questionVi: "Nếu có điều gì thắc mắc, đừng ngần ngại mà hãy hỏi bất cứ lúc nào.",
              options: ["언제든지", "언제던지", "언제라면", "언제처럼"],
              correctIndex: 0,
              explanation: "Mang ý nghĩa 'bất cứ khi nào' là '언제든지'."
            }
          },
          {
            id: "g2",
            title: "-(으)ㄹ 만하다",
            meaning: "Đáng để (xem, thử, đi)... / Khá là, chấp nhận được",
            explanation: "1. Thể hiện một hành động có giá trị hoặc đáng để thực hiện. 2. Thể hiện mức độ vừa phải, chấp nhận được dù chưa phải hoàn hảo.",
            conjugation: [
              { type: "Động từ không patchim hoặc có 'ㄹ'", rule: "+ -ㄹ 만하다", example: "가다 → 갈 만하다, 볼 만하다, 살 만하다" },
              { type: "Động từ có patchim", rule: "+ -을 만하다", example: "먹다 → 먹을 만하다, 읽다 → 읽을 만하다, 믿다 → 믿을 만하다" }
            ],
            notes: "Rất hay dùng khi giới thiệu phim ảnh, sách báo, nhà hàng, địa điểm du lịch.",
            examples: [
              { ko: "이 영화는 감동적이라서 주말에 꼭 한 번 볼 만해요.", vi: "Bộ phim này cảm động lắm, cuối tuần rất đáng xem một lần đấy." },
              { ko: "서울의 물가가 비싸긴 하지만 대중교통이 편리해서 살 만해요.", vi: "Vật giá ở Seoul đắt đỏ thật nhưng giao thông công cộng tiện lợi nên sống cũng ổn." },
              { ko: "민수 씨는 성실해서 중요한 일을 믿고 맡길 만한 사람이에요.", vi: "Minsoo rất chăm chỉ, là người đáng tin cậy để giao phó việc quan trọng." }
            ],
            quickQuiz: {
              question: "친구가 추천해 준 소설책을 읽었는데 정말 시간 내서 _____.",
              questionVi: "Tôi đã đọc cuốn tiểu thuyết bạn giới thiệu, thật sự rất đáng để dành thời gian đọc.",
              options: ["읽을 만하더라고요", "읽으려면 멀었어요", "읽든지 말든지", "읽을수록"],
              correctIndex: 0,
              explanation: "'Rất đáng để dành thời gian đọc' kết hợp với cảm nhận trải nghiệm: '읽을 만하더라고요'."
            }
          },
          {
            id: "g3",
            title: "-(으)ㄹ수록",
            meaning: "Càng... thì càng...",
            explanation: "Diễn tả mức độ hoặc trạng thái của vế sau thay đổi tỷ lệ thuận theo sự gia tăng của hành động/trạng thái ở vế trước.",
            conjugation: [
              { type: "Động từ / Tính từ không patchim hoặc 'ㄹ'", rule: "+ -ㄹ수록", example: "하다 → 할수록, 멀다 → 멀수록, 빠르다 → 빠를수록" },
              { type: "Động từ / Tính từ có patchim", rule: "+ -을수록", example: "먹다 → 먹을수록, 많다 → 많을수록, 읽다 → 읽을수록" }
            ],
            notes: "Có thể lặp lại động từ ở dạng '-(으)면 -(으)ㄹ수록' để tăng sức nhấn mạnh (ví dụ: 한국어는 공부하면 공부할수록 재미있어요).",
            examples: [
              { ko: "한국어는 배울수록 표현이 다양해서 더 흥미로워요.", vi: "Tiếng Hàn càng học thì biểu hiện càng đa dạng nên càng thấy thú vị." },
              { ko: "외국어는 어릴 때 시작할수록 발음을 더 자연스럽게 배울 수 있대요.", vi: "Ngoại ngữ thì nghe nói càng bắt đầu từ nhỏ càng học phát âm tự nhiên hơn." },
              { ko: "친구는 오래 사귈수록 서로를 더 깊이 이해하게 돼요.", vi: "Bạn bè càng chơi lâu thì càng thấu hiểu nhau sâu sắc hơn." }
            ],
            quickQuiz: {
              question: "일찍 출발(하다) _____ 교통 체증을 피할 수 있습니다.",
              questionVi: "Càng xuất phát sớm thì càng có thể tránh được tắc nghẽn giao thông.",
              options: ["할수록", "하든지", "할 만해서", "하려면"],
              correctIndex: 0,
              explanation: "'Càng xuất phát sớm càng tránh được kẹt xe': '출발할수록'."
            }
          }
        ],

        vocabulary: [
          {
            category: "Tìm việc & Ứng tuyển (구직 및 지원)",
            words: [
              {
                ko: "구인 광고",
                hanja: "求人廣告",
                en: "help-wanted ad / job recruitment notice",
                vi: "quảng cáo tuyển dụng",
                examples: [
                  { ko: "대학교 게시판에 붙은 아르바이트 구인 광고를 보고 연락드렸어요.", vi: "Tôi liên hệ sau khi thấy mẩu quảng cáo tuyển nhân viên làm thêm dán trên bảng thông báo đại học." },
                  { ko: "인터넷 구인 구직 사이트에 매일 새로운 구인 광고가 올라와요.", vi: "Trên trang web tuyển dụng việc làm trực tuyến mỗi ngày đều có các mẩu tin tuyển dụng mới được đăng tải." }
                ]
              },
              {
                ko: "지원 자격",
                hanja: "志願資格",
                en: "application qualifications / eligibility",
                vi: "tiêu chuẩn, tư cách ứng tuyển",
                examples: [
                  { ko: "이번 채용 공고의 지원 자격에는 학력이나 연령 제한이 전혀 없어요.", vi: "Tiêu chuẩn ứng tuyển của đợt tuyển dụng này hoàn toàn không giới hạn học vấn hay độ tuổi." },
                  { ko: "지원 자격을 꼼꼼하게 확인한 후에 서류를 접수하세요.", vi: "Hãy kiểm tra kỹ lưỡng các tiêu chuẩn ứng tuyển rồi hẵng nộp hồ sơ nhé." }
                ]
              },
              {
                ko: "이력서",
                hanja: "履歷書",
                en: "resume / curriculum vitae (CV)",
                vi: "sơ yếu lý lịch, CV",
                examples: [
                  { ko: "최근 6개월 이내에 찍은 증명사진을 붙인 이력서를 제출하세요.", vi: "Hãy nộp bản sơ yếu lý lịch có dán ảnh thẻ chụp trong vòng 6 tháng gần đây." },
                  { ko: "이력서에 자신의 학력과 관련 아르바이트 경력을 상세히 적었어요.", vi: "Tôi đã ghi chi tiết quá trình học tập và kinh nghiệm làm thêm liên quan vào bản CV." }
                ]
              },
              {
                ko: "자기소개서",
                hanja: "自己紹介書",
                en: "cover letter / self-introduction letter",
                vi: "bản tự giới thiệu bản thân",
                examples: [
                  { ko: "회사에 지원하게 된 솔직한 동기를 자기소개서에 잘 풀어썼어요.", vi: "Tôi đã giãi bày lý do chân thành khi ứng tuyển vào công ty trong bản tự giới thiệu." },
                  { ko: "자기소개서를 작성할 때는 자신의 강점을 구체적인 사례로 보여 줘야 해요.", vi: "Khi viết bài tự giới thiệu, cần phải chứng minh thế mạnh của mình bằng các ví dụ cụ thể." }
                ]
              },
              {
                ko: "면접을 보다",
                hanja: "面接",
                en: "to have a job interview",
                vi: "đi phỏng vấn",
                examples: [
                  { ko: "내일 오후에 카페 사장님과 직접 만나 1대1로 면접을 보기로 했어요.", vi: "Chiều mai tôi có hẹn gặp trực tiếp chủ quán cà phê để phỏng vấn một - một." },
                  { ko: "면접을 볼 때는 단정한 옷차림과 자신감 있는 목소리가 중요해요.", vi: "Khi đi phỏng vấn thì trang phục chỉnh tề và giọng nói tự tin là yếu tố rất quan trọng." }
                ]
              },
              {
                ko: "합격하다",
                hanja: "合格하다",
                en: "to pass / get accepted",
                vi: "trúng tuyển, đỗ",
                examples: [
                  { ko: "치열한 경쟁률을 뚫고 최종 면접에 당당히 합격했다는 소식을 들었어요.", vi: "Vượt qua tỷ lệ chọi gắt gao, tôi đã nhận được tin mình đường hoàng trúng tuyển vòng phỏng vấn cuối." },
                  { ko: "원하던 시험에 합격하기 위해 지난 1년 동안 밤낮없이 노력했어요.", vi: "Để thi đỗ vào kỳ thi mong ước, suốt một năm qua tôi đã nỗ lực ngày đêm không ngừng nghỉ." }
                ]
              }
            ]
          },
          {
            category: "Điều kiện làm việc & Thái độ (근무 조건 & 태도)",
            words: [
              {
                ko: "시급",
                hanja: "時給",
                en: "hourly wage",
                vi: "tiền lương theo giờ",
                examples: [
                  { ko: "올해부터 최저 시급이 올라서 아르바이트생들의 부담이 조금 줄었어요.", vi: "Từ năm nay mức lương tối thiểu theo giờ tăng lên nên gánh nặng của sinh viên làm thêm giảm đi đôi chút." },
                  { ko: "야간 근무를 하면 낮보다 시급을 1.5배 더 많이 받을 수 있어요.", vi: "Nếu làm ca đêm thì bạn sẽ nhận được mức lương theo giờ cao gấp 1,5 lần so với ban ngày." }
                ]
              },
              {
                ko: "근무 시간",
                hanja: "勤務時間",
                en: "working hours",
                vi: "thời gian làm việc",
                examples: [
                  { ko: "정규 근무 시간은 평일 오전 9시부터 오후 6시까지입니다.", vi: "Thời gian làm việc chính thức là từ 9 giờ sáng đến 6 giờ chiều các ngày trong tuần." },
                  { ko: "학업과 병행해야 해서 근무 시간을 유연하게 조정할 수 있는 곳을 찾아요.", vi: "Vì phải học song song nên tôi tìm nơi làm việc có thể linh hoạt điều chỉnh giờ giấc." }
                ]
              },
              {
                ko: "손님을 응대하다",
                hanja: "應待하다",
                en: "to serve / attend to customers",
                vi: "tiếp đón và phục vụ khách hàng",
                examples: [
                  { ko: "항상 밝은 미소와 정중한 태도로 매장을 찾아온 손님을 응대해야 해요.", vi: "Luôn phải nở nụ cười tươi tắn và giữ thái độ lịch thiệp khi tiếp đón khách tới cửa hàng." },
                  { ko: "다양한 유형의 손님을 응대하다 보면 대인 관계 능력이 자연스럽게 늘어요.", vi: "Phục vụ nhiều kiểu khách hàng khác nhau giúp kỹ năng giao tiếp ứng xử tiến bộ một cách tự nhiên." }
                ]
              },
              {
                ko: "경력을 쌓다",
                hanja: "經歷을 쌓다",
                en: "to build / gain work experience",
                vi: "tích lũy kinh nghiệm làm việc",
                examples: [
                  { ko: "대학 시절에 다양한 인턴십을 하며 실무 경력을 차근차근 쌓았어요.", vi: "Thời đại học tôi đã tham gia nhiều kỳ thực tập để từng bước tích lũy kinh nghiệm thực tế." },
                  { ko: "원하는 분야에서 전문적인 경력을 쌓아 멋진 전문가가 되고 싶어요.", vi: "Tôi muốn tích lũy kinh nghiệm chuyên sâu trong lĩnh vực mình yêu thích để trở thành một chuyên gia giỏi." }
                ]
              },
              {
                ko: "성실하다",
                hanja: "誠實하다",
                en: "to be diligent / sincere",
                vi: "chăm chỉ, thành thật, nghiêm túc",
                examples: [
                  { ko: "그 친구는 매사에 성실하고 시간 약속을 철저히 지키기로 유명해요.", vi: "Bạn ấy nổi tiếng là người làm việc gì cũng chăm chỉ, nghiêm túc và luôn đúng hẹn." },
                  { ko: "비록 능력은 조금 부족해도 성실한 태도를 가진 직원이 오래 인정받아요.", vi: "Dù năng lực ban đầu có chút non nớt nhưng nhân viên chăm chỉ, thật thà sẽ được quý mến lâu dài." }
                ]
              },
              {
                ko: "적응하다",
                hanja: "適應하다",
                en: "to adapt / adjust to",
                vi: "thích nghi, hòa nhập",
                examples: [
                  { ko: "동료들이 따뜻하게 도와준 덕분에 새로운 직장 분위기에 금방 적응했어요.", vi: "Nhờ sự giúp đỡ nhiệt tình của các đồng nghiệp, tôi đã nhanh chóng thích nghi với môi trường làm việc mới." },
                  { ko: "외국 생활 초기에는 음식과 기후에 적응하느라 다소 고생을 했어요.", vi: "Hồi đầu mới sang nước ngoài, tôi hơi vất vả trong việc thích nghi với đồ ăn và khí hậu." }
                ]
              }
            ]
          }
        ],

        dialogues: [
          {
            title: "대화 1 · Phỏng vấn xin làm thêm ở quán cà phê",
            audioText: "언제부터 일할 수 있어요? 다음 주 월요일부터 일할 수 있습니다. 주말에도 근무가 가능한가요? 네, 주말에는 언제든지 일할 수 있습니다. 손님을 응대한 경험이 있어요? 네, 작년에 베이커리 카페에서 6개월 동안 일한 경험이 있어서 포스 사용과 음료 서빙에 익숙합니다.",
            lines: [
              { speaker: "매니저", ko: "언제부터 일할 수 있어요?", vi: "Bạn có thể bắt đầu làm việc từ khi nào?" },
              { speaker: "지원자", ko: "다음 주 월요일부터 일할 수 있습니다.", vi: "Em có thể bắt đầu làm việc từ thứ Hai tuần sau ạ." },
              { speaker: "매니저", ko: "주말에도 근무가 가능한가요?", vi: "Cuối tuần em có thể đi làm được không?" },
              { speaker: "지원자", ko: "네, 주말에는 언제든지 일할 수 있습니다.", vi: "Dạ vâng, cuối tuần thì bất cứ lúc nào em cũng đi làm được ạ." },
              { speaker: "매니저", ko: "손님을 응대한 경험이 있어요?", vi: "Em đã có kinh nghiệm tiếp đón khách hàng bao giờ chưa?" },
              { speaker: "지원자", ko: "네, 작년에 베이커리 카페에서 6개월 동안 일한 경험이 있어서 포스 사용과 음료 서빙에 익숙합니다.", vi: "Dạ có, năm ngoái em từng làm việc 6 tháng ở tiệm cà phê bánh ngọt nên đã quen với việc dùng máy tính tiền POS và phục vụ đồ uống rồi ạ." }
            ],
            comprehension: [
              {
                question: "지원자는 주말 근무에 대해 어떻게 답했습니까?",
                options: [
                  "주말에는 절대 일할 수 없다고 했다",
                  "주말에는 언제든지 일할 수 있다고 했다",
                  "토요일 오전에만 일할 수 있다고 했다",
                  "시급을 더 주면 일하겠다고 했다"
                ],
                correctIndex: 1,
                explanation: "Ứng viên trả lời: '네, 주말에는 언제든지 일할 수 있습니다.'"
              }
            ]
          }
        ],

        speaking: {
          title: "Đóng vai phỏng vấn xin việc (모의 면접)",
          guide: "Thực hành trả lời phỏng vấn ứng tuyển làm việc bán thời gian. Sử dụng biểu hiện '언제든지' và '경험이 있어서'.",
          prompts: [
            "1. 자기소개를 간단히 해 보세요.",
            "2. 희망하는 근무 요일과 시간은 어떻게 됩니까?",
            "3. 자신의 장점이나 관련 경험은 무엇입니까?"
          ],
          sampleAnswer: "안녕하십니까? 카페 바리스타 직무에 지원한 응시자입니다. 저는 평일 오후나 주말에는 언제든지 성실하게 근무할 수 있습니다. 작년에 다른 카페에서 일하며 손님 응대와 커피 제조 경험을 쌓았기 때문에 빠르게 적응할 자신이 있습니다. 믿고 맡겨 주시면 최선을 다하겠습니다."
        },

        reading: {
          title: "Đọc tin tuyển dụng nhân viên quán cà phê",
          passage: "【채용 공고】 신촌역 대학가 유명 디저트 카페에서 성실하고 밝은 주말 아르바이트 직원을 모집합니다.\n\n■ 담당 업무: 주문 접수, 음료 제조 보조, 매장 정리\n■ 지원 자격: 연령 무관, 초보자도 지원 가능 (동종 업계 경력자 우대)\n■ 근무 일시: 매주 토·일요일 오후 1시 ~ 6시 (시간 협의 가능)\n■ 급여: 시급 10,000원 (주휴수당 별도 지급)\n■ 접수 방법: 5월 20일까지 간단한 이력서와 자기소개서를 이메일로 보내 주시면 서류 확인 후 개별 연락드리겠습니다.",
          questions: [
            {
              question: "이 구인 광고의 내용과 일치하지 않는 것은 무엇입니까?",
              options: [
                "카페에서 일해 본 경험이 없어도 지원할 수 있다.",
                "근무 요일은 매주 토요일과 일요일이다.",
                "이력서는 매장에 직접 방문하여 제출해야 한다.",
                "시급은 만 원이며 주휴수당을 별도로 준다."
              ],
              correctIndex: 2,
              explanation: "Trong thông báo ghi: '이메일로 보내 주시면' (gửi qua email), không bắt buộc nộp trực tiếp tại quán."
            }
          ]
        },

        writing: {
          title: "Viết email ứng tuyển xin việc làm thêm",
          guide: "Viết email khoảng 4-5 câu ứng tuyển theo tin tuyển dụng trên.",
          frame: [
            "안녕하세요. 이번 주말 아르바이트 공고를 보고 지원하는 ___입니다.",
            "저는 ___부터 근무가 가능하며, 주말에는 ___든지 일할 수 있습니다.",
            "이전에 ___에서 일한 경험이 있어서 ___에 자신 있습니다.",
            "제 연락처는 ___입니다. 검토 부탁드립니다."
          ],
          sampleAnswer: "안녕하세요. 주말 카페 아르바이트 공고를 보고 지원하는 이민수입니다. 저는 다음 주부터 근무가 가능하며, 주말에는 언제든지 성실하게 일할 수 있습니다. 이전에 베이커리에서 6개월 동안 일한 경험이 있어서 손님 응대와 매장 관리에 자신 있습니다. 제 연락처는 010-1234-5678입니다. 이력서를 첨부하오니 긍정적인 검토 부탁드립니다. 감사합니다."
        }
      },

      "16": {
        id: "16",
        course: "3b",
        titleKo: "가야금이 사람 키만 해요",
        titleVi: "Đàn Gayageum to bằng người",
        topic: "심리 상태 + 모양 묘사 (Trạng thái tâm lý & Miêu tả hình dáng)",
        summary: "Học cách so sánh kích thước với N만 하다, diễn tả điều không dám nghĩ tới V-(으)ㄹ 생각도 못 하다, cấu trúc nổi tiếng -기로 유명하다 và hệ thống từ vựng về tâm lý, hình dáng.",

        grammar: [
          {
            id: "g1",
            title: "N만 하다",
            meaning: "To / bằng / cỡ như... (So sánh kích thước, mức độ)",
            explanation: "Gắn trực tiếp sau danh từ để so sánh kích thước, độ lớn, số lượng hoặc mức độ của chủ ngữ tương đương với danh từ đó. Thường dùng trong các trường hợp miêu tả trực quan kích thước sự vật hoặc sự thay đổi tầm vóc.",
            conjugation: [
              { type: "Danh từ (không phân biệt patchim)", rule: "+ 만 하다", example: "사람 키 + 만 하다 → 사람 키만 하다, 얼굴 + 만 하다 → 얼굴만 하다" },
              { type: "Dạng định ngữ bổ nghĩa danh từ", rule: "N만 한 + N", example: "주먹만 한 사과 (quả táo to bằng nắm tay), 집채만 한 파도 (ngọn sóng to bằng ngôi nhà)" },
              { type: "Dạng phủ định", rule: "N만 못하다", example: "형만 못한 아우 (em không bằng anh), 예전만 못하다 (không bằng ngày xưa)" }
            ],
            notes: "Tránh nhầm với 'N만' (chỉ, duy nhất). Cấu trúc 'N만 하다' đi liền và có '하다' đóng vai trò tính từ so sánh.",
            examples: [
              { ko: "가야금은 길이가 사람 키만 해서 연주할 때 바닥에 놓고 타요.", vi: "Đàn Gayageum có chiều dài bằng cả chiều cao người nên khi biểu diễn phải đặt xuống sàn để gảy." },
              { ko: "수박이 얼마나 큰지 어린아이 몸통만 해요.", vi: "Quả dưa hấu to đến mức bằng cả thân người một đứa trẻ con." },
              { ko: "비가 오더니 주먹만 한 우박이 하늘에서 쏟아졌어요.", vi: "Trời đổ mưa rồi những cục mưa đá to bằng nắm tay trút xuống từ bầu trời." }
            ],
            quickQuiz: {
              question: "어제 시장에서 산 사과가 정말 커서 제 (주먹) _____ 하더라고요.",
              questionVi: "Quả táo hôm qua tôi mua ở chợ to thật đấy, thấy to bằng cả nắm tay của tôi.",
              options: ["주먹만", "주먹보다", "주먹처럼", "주먹만큼"],
              correctIndex: 0,
              explanation: "Cấu trúc so sánh kích thước đi với tính từ '하다' phía sau là 'N만 하다' -> '주먹만 하더라고요'."
            }
          },
          {
            id: "g2",
            title: "V-(으)ㄹ 생각도 못 하다",
            meaning: "Thậm chí không dám nghĩ tới / Không tưởng tượng nổi sẽ...",
            explanation: "Dùng để diễn tả một việc gì đó quá khó khăn, quá bận rộn hoặc nằm ngoài khả năng, khiến người nói thậm chí không dám nghĩ tới việc thực hiện hoặc không hề lường trước được.",
            conjugation: [
              { type: "Động từ kết thúc bằng Nguyên âm hoặc 'ㄹ'", rule: "+ -ㄹ 생각도 못 하다", example: "가다 → 갈 생각도 못 하다, 살다 → 살 생각도 못 하다" },
              { type: "Động từ kết thúc bằng Phụ âm (có patchim)", rule: "+ -을 생각도 못 하다", example: "먹다 → 먹을 생각도 못 하다, 받다 → 받을 생각도 못 하다" },
              { type: "Thì quá khứ", rule: "+ -을/ㄹ 생각도 못 했다", example: "합격할 줄은 생각도 못 했어요 (không ngờ là sẽ đỗ)" }
            ],
            notes: "Thường đi kèm với các trạng từ chỉ mức độ cao như '너무 ~아서/어서', '감히' (dám).",
            examples: [
              { ko: "요즘 일이 너무 바빠서 주말에 쉴 생각도 못 해요.", vi: "Dạo này công việc quá bận nên cuối tuần thậm chí tôi còn chẳng dám nghĩ tới chuyện nghỉ ngơi." },
              { ko: "한국어 실력이 부족해서 통역을 할 생각은 꿈에도 못 했어요.", vi: "Tiếng Hàn còn non nớt nên chuyện đi dịch tôi thậm chí trong mơ cũng chẳng dám nghĩ tới." },
              { ko: "악기 연주가 이렇게 마음을 편안하게 해 줄 줄은 생각도 못 했어요.", vi: "Tôi không hề nghĩ rằng việc chơi nhạc cụ lại giúp tâm trạng thoải mái đến nhường này." }
            ],
            quickQuiz: {
              question: "비행기 표 값이 너무 비싸서 이번 연휴에는 해외여행을 (가다) _____.",
              questionVi: "Giá vé máy bay đắt quá nên kỳ nghỉ lễ lần này tôi thậm chí chẳng dám nghĩ tới việc đi du lịch nước ngoài.",
              options: ["갈 생각도 못 해요", "갈 만해요", "가기로 유명해요", "가려면 멀었어요"],
              correctIndex: 0,
              explanation: "Vì vé quá đắt nên không dám nghĩ tới việc đi, dùng '갈 생각도 못 해요'."
            }
          },
          {
            id: "g3",
            title: "A/V-기로 유명하다, N-(으)로 유명하다",
            meaning: "Nổi tiếng vì / Nổi tiếng là...",
            explanation: "Dùng để diễn tả một địa điểm, con người, sản phẩm hoặc sự vật nào đó được nhiều người biết đến rộng rãi nhờ một đặc điểm, tính chất hoặc thế mạnh nổi bật.",
            conjugation: [
              { type: "Tính từ & Động từ", rule: "+ -기로 유명하다", example: "친절하다 → 친절하기로 유명하다, 맛있다 → 맛있기로 유명하다" },
              { type: "Danh từ", rule: "Patchim + 으로 유명하다 / Không patchim + 로 유명하다", example: "관광지 → 관광지로 유명하다, 온천 → 온천으로 유명하다" }
            ],
            notes: "Nếu muốn bổ nghĩa cho danh từ phía sau, dùng dạng định ngữ: 'A/V-기로 유명한 N' (ví dụ: 야경이 아름답기로 유명한 곳).",
            examples: [
              { ko: "인사동은 전통 찻집과 한국 전통 공예품으로 유명해요.", vi: "Insadong nổi tiếng với các quán trà truyền thống và đồ thủ công mỹ nghệ Hàn Quốc." },
              { ko: "그 식당은 신선한 재료를 쓰기로 유명해서 항상 손님이 많아요.", vi: "Nhà hàng đó nổi tiếng vì dùng nguyên liệu tươi ngon nên lúc nào cũng đông khách." },
              { ko: "한국의 가야금은 소리가 맑고 부드럽기로 유명한 전통 악기예요.", vi: "Đàn Gayageum của Hàn Quốc là nhạc cụ truyền thống nổi tiếng với âm thanh trong trẻo và êm dịu." }
            ],
            quickQuiz: {
              question: "제주도는 경치가 아름답고 바람이 (많다) _____ 관광지입니다.",
              questionVi: "Đảo Jeju là điểm du lịch nổi tiếng với phong cảnh đẹp và nhiều gió.",
              options: ["많기로 유명한", "많을 생각도 못 한", "많은 만큼", "많을 만한"],
              correctIndex: 0,
              explanation: "Bổ nghĩa cho '관광지' với ý nghĩa 'nổi tiếng vì nhiều gió': '많기로 유명한'."
            }
          }
        ],

        vocabulary: [
          {
            category: "Trạng thái tâm lý & Cảm xúc (심리 상태)",
            words: [
              {
                ko: "마음이 편안해지다",
                hanja: "便安",
                en: "to feel at ease / feel peaceful",
                vi: "tâm trạng trở nên nhẹ nhõm, thư thái, bình an",
                image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80",
                examples: [
                  { ko: "조용한 클래식 음악을 들으니 복잡했던 마음이 편안해져요.", vi: "Nghe bản nhạc cổ điển êm đềm thấy cõi lòng rối bời bỗng trở nên thư thái hẳn." },
                  { ko: "숲속 길을 천천히 산책하고 나면 마음이 한결 편안해지더라고요.", vi: "Sau khi đi dạo thong thả trên con đường rừng, tôi thấy tâm trạng nhẹ nhõm hơn nhiều." }
                ]
              },
              {
                ko: "신이 나다",
                hanja: "",
                en: "to be excited / cheerful",
                vi: "hào hứng, phấn chấn, phấn khởi",
                examples: [
                  { ko: "신나는 음악에 맞춰 친구들과 다 함께 손뼉을 치며 춤을 췄어요.", vi: "Hòa cùng điệu nhạc sôi động, tôi cùng bạn bè vừa vỗ tay vừa nhảy múa." },
                  { ko: "오랜만에 가고 싶었던 콘서트에 가게 되어서 정말 신이 났어요.", vi: "Được đi xem buổi hòa nhạc hằng mong ước sau bao ngày khiến tôi vô cùng hào hứng." }
                ]
              },
              {
                ko: "가슴이 뛰다",
                hanja: "",
                en: "to have one's heart race / feel thrilled",
                vi: "tim đập rộn ràng, hồi hộp, xao xuyến",
                examples: [
                  { ko: "많은 관객 앞에서 첫 무대에 오르기 전에는 가슴이 몹시 뛰었어요.", vi: "Trước khi bước lên sân khấu trước đông đảo khán giả, tim tôi đập thình thịch liên hồi." },
                  { ko: "좋아하는 사람에게 고백을 받자 가슴이 쿵쾅쿵쾅 뛰기 시작했어요.", vi: "Được người mình thầm thương ngỏ lời yêu, trái tim tôi bắt đầu đập rộn ràng xao xuyến." }
                ]
              },
              {
                ko: "마음에 여유가 생기다",
                hanja: "餘裕",
                en: "to find peace of mind / have free time",
                vi: "tâm trí có được sự thảnh thơi, ung dung",
                examples: [
                  { ko: "바쁜 시험 기간이 끝나고 나니 비로소 마음에 여유가 좀 생겼어요.", vi: "Kỳ thi bận rộn trôi qua, cuối cùng tâm trí tôi cũng có được chút thảnh thơi." },
                  { ko: "주말에는 스마트폰을 멀리하고 마음에 여유를 가지려고 노력해요.", vi: "Vào cuối tuần, tôi cố gắng để điện thoại sang một bên để tâm hồn được thong thả, an yên." }
                ]
              },
              {
                ko: "긴장이 풀리다",
                hanja: "緊張",
                en: "to relieve tension / relax",
                vi: "giải tỏa căng thẳng, thấy thả lỏng",
                examples: [
                  { ko: "따뜻한 허브차를 마시며 심호흡을 하니 온몸의 긴장이 스르르 풀렸어요.", vi: "Uống ngụm trà thảo mộc ấm và hít thở sâu, mọi căng thẳng trong người tôi tan biến hẳn." },
                  { ko: "면접관이 친절하게 웃어 주신 덕분에 얼어붙었던 긴장이 풀렸어요.", vi: "Nhờ nụ cười thân thiện của người phỏng vấn mà nỗi căng thẳng cứng đờ của tôi đã được giải tỏa." }
                ]
              },
              {
                ko: "뿌듯하다",
                hanja: "",
                en: "to feel proud / fulfilled",
                vi: "cảm thấy tự hào, tràn đầy mãn nguyện, ấm lòng",
                examples: [
                  { ko: "밤새워 준비한 어려운 프로젝트를 성공적으로 끝내고 나니 가슴이 뿌듯해요.", vi: "Hoàn thành xuất sắc dự án khó nhằn thức trắng đêm chuẩn bị, tôi thấy lòng tràn ngập tự hào." },
                  { ko: "내가 직접 뜬 목도리를 부모님께 선물해 드리니 정말 뿌듯하더라고요.", vi: "Tự tay đan chiếc khăn len tặng bố mẹ, tôi cảm thấy trong lòng vô cùng ấm áp và mãn nguyện." }
                ]
              },
              {
                ko: "홀가분하다",
                hanja: "",
                en: "to feel unburdened / relieved",
                vi: "nhẹ nhõm, trút được gánh nặng trong lòng",
                examples: [
                  { ko: "그동안 마음을 무겁게 짓누르던 빚을 다 갚고 나니 마음이 정말 홀가분해요.", vi: "Trả hết được khoản nợ từng đè nặng trĩu tâm can bấy lâu, tôi thấy lòng nhẹ bẫng thảnh thơi." },
                  { ko: "밀렸던 숙제를 마침내 다 제출하고 홀가분한 기분으로 영화를 보러 갔어요.", vi: "Nộp xong toàn bộ bài tập tồn đọng, tôi đi xem phim với tâm trạng nhẹ nhõm vô cùng." }
                ]
              },
              {
                ko: "답답하다",
                hanja: "",
                en: "to feel frustrated / suffocated",
                vi: "ngột ngạt, bức bối, bế tắc",
                examples: [
                  { ko: "좁은 방 안에만 하루 종일 있으려니 가슴이 너무 답답해서 바람을 쐬러 나갔어요.", vi: "Ru rú suốt cả ngày trong căn phòng chật chội thấy ngột ngạt quá nên tôi ra ngoài hóng gió." },
                  { ko: "하고 싶은 말이 많은데 한국어가 서툴러서 제대로 표현하지 못하니 답답해요.", vi: "Bao điều muốn nói mà tiếng Hàn còn vụng về không diễn đạt được khiến tôi thấy bứt rứt, bế tắc." }
                ]
              }
            ]
          },
          {
            category: "Miêu tả hình dáng & Trạng thái vật thể (모양 묘사)",
            words: [
              {
                ko: "동그랗다",
                hanja: "",
                en: "to be round / spherical",
                vi: "tròn trịa, tròn xoe",
                image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=400&q=80",
                examples: [
                  { ko: "추석 밤하늘에 뜬 보름달처럼 동그란 얼굴이 무척 귀여워요.", vi: "Khuôn mặt tròn xoe như ánh trăng rằm đêm Trung thu trông vô cùng đáng yêu." },
                  { ko: "아이들이 잔디밭 위에 동그랗게 둘러앉아 노래를 부르고 있어요.", vi: "Lũ trẻ đang ngồi quây tròn trên bãi cỏ cùng nhau cất tiếng hát." }
                ]
              },
              {
                ko: "네모나다",
                hanja: "",
                en: "to be square / rectangular",
                vi: "vuông vắn, có hình vuông",
                examples: [
                  { ko: "선물 상자가 반듯하게 네모나서 포장지를 씌우기가 아주 편해요.", vi: "Hộp quà vuông vắn vức nên việc bọc giấy gói quà rất dễ dàng." },
                  { ko: "그 방에는 네모난 커다란 창문이 있어서 햇빛이 잘 들어와요.", vi: "Căn phòng đó có khung cửa sổ vuông lớn nên đón ánh nắng rất chan hòa." }
                ]
              },
              {
                ko: "세모나다",
                hanja: "",
                en: "to be triangular",
                vi: "hình tam giác",
                examples: [
                  { ko: "빵집에서 세모난 모양의 딸기 조각 케이크를 두 개 샀어요.", vi: "Tôi đã mua hai miếng bánh kem dâu tây hình tam giác ở tiệm bánh mì." },
                  { ko: "한국 편의점에서는 세모난 삼각김밥이 학생들에게 인기가 많아요.", vi: "Ở cửa hàng tiện lợi Hàn Quốc, món cơm nắm tam giác rất được lòng các bạn học sinh." }
                ]
              },
              {
                ko: "길쭉하다",
                hanja: "",
                en: "to be elongated / slender and long",
                vi: "thon dài, dài ngoằng",
                examples: [
                  { ko: "가야금은 몸체가 길쭉하게 생긴 아름다운 전통 악기예요.", vi: "Đàn Gayageum là một nhạc cụ truyền thống tuyệt đẹp với thân đàn thon dài." },
                  { ko: "그 채소는 모양이 길쭉하고 색깔이 아주 선명해요.", vi: "Loại rau củ đó có hình dáng thon dài và màu sắc rất tươi tắn." }
                ]
              },
              {
                ko: "뾰족하다",
                hanja: "",
                en: "to be pointed / sharp",
                vi: "nhọn hoắt, sắc nhọn",
                examples: [
                  { ko: "글씨를 또박또박 쓰기 위해 연필심을 뾰족하게 깎았어요.", vi: "Để viết chữ nắn nót rõ ràng, tôi đã gọt đầu bút chì thật nhọn." },
                  { ko: "산꼭대기의 뾰족한 바위들이 장관을 이루고 있어요.", vi: "Những tảng đá nhọn hoắt trên đỉnh núi tạo nên một cảnh tượng vô cùng hùng vĩ." }
                ]
              },
              {
                ko: "납작하다",
                hanja: "",
                en: "to be flat",
                vi: "dẹt, phẳng, bẹt",
                examples: [
                  { ko: "바닷가에서 납작한 조약돌을 주워 물수제비를 떴어요.", vi: "Tôi nhặt hòn sỏi dẹt bên bờ biển rồi lia đá tạo sóng trên mặt nước." },
                  { ko: "대구 서문시장에서 파는 납작만두는 별미로 유명해요.", vi: "Món bánh bao dẹt bán ở chợ Seomun Daegu nổi tiếng là một món đặc sản lạ miệng." }
                ]
              },
              {
                ko: "매끄럽다",
                hanja: "",
                en: "to be smooth / sleek",
                vi: "nhẵn thín, trơn mượt, láng bóng",
                examples: [
                  { ko: "악기 표면을 정성껏 다듬었더니 비단처럼 아주 매끄러워졌어요.", vi: "Bề mặt nhạc cụ được đánh bóng cẩn thận nên trở nên trơn mượt tựa như lụa." },
                  { ko: "좋은 화장품을 꾸준히 발라서 피부가 아기 피부처럼 매끄러워요.", vi: "Chăm chỉ thoa mỹ phẩm tốt nên làn da mịn màng, mướt mát như da em bé." }
                ]
              },
              {
                ko: "거칠다",
                hanja: "",
                en: "to be rough / coarse",
                vi: "thô ráp, xù xì, gồ ghề",
                examples: [
                  { ko: "평생 동안 고된 농사일을 하신 어머니의 손이 거칠어졌어요.", vi: "Đôi bàn tay của mẹ đã trở nên thô ráp sau cả đời làm lụng đồng áng vất vả." },
                  { ko: "사포로 문지르기 전의 나무판은 표면이 무척 거칠었어요.", vi: "Tấm ván gỗ trước khi đánh giấy ráp bề mặt gồ ghề và xù xì lắm." }
                ]
              },
              {
                ko: "두껍다",
                hanja: "",
                en: "to be thick",
                vi: "dày dặn (sách vở, áo ấm, ván gỗ)",
                examples: [
                  { ko: "한국의 추운 겨울을 따뜻하게 보내려면 두꺼운 패딩 코트가 필요해요.", vi: "Muốn trải qua mùa đông giá lạnh ở Hàn Quốc ấm áp thì cần có chiếc áo phao dày dặn." },
                  { ko: "이 사전은 천 페이지가 넘어서 아주 무겁고 두꺼워요.", vi: "Cuốn từ điển này dày hơn một nghìn trang nên rất nặng và dày cộp." }
                ]
              },
              {
                ko: "얇다",
                hanja: "",
                en: "to be thin",
                vi: "mỏng, mảnh mai",
                examples: [
                  { ko: "한여름에는 통풍이 잘되는 얇은 면 옷을 입는 것이 좋아요.", vi: "Vào giữa mùa hè oi ả, mặc quần áo vải cotton mỏng thoáng khí là thích nhất." },
                  { ko: "이 종이는 너무 얇아서 뒷면에 쓴 글씨가 그대로 다 비쳐요.", vi: "Tờ giấy này mỏng quá nên chữ viết mặt sau bị hằn lộ rõ mồn một." }
                ]
              }
            ]
          },
          {
            category: "Nhạc cụ truyền thống & Động từ biểu diễn (전통 악기 & 연주)",
            words: [
              {
                ko: "가야금",
                hanja: "伽倻琴",
                en: "Gayageum (Korean 12-string zither)",
                vi: "đàn Gayageum (đàn tranh truyền thống 12 dây của Hàn Quốc)",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Gayageum.jpg/440px-Gayageum.jpg",
                examples: [
                  { ko: "가야금은 한국 전통 음악에서 가장 널리 사랑받는 대표적인 현악기예요.", vi: "Gayageum là nhạc cụ dây tiêu biểu và được yêu mến rộng rãi nhất trong âm nhạc truyền thống Hàn Quốc." },
                  { ko: "맑고 은은하게 울려 퍼지는 가야금 선율이 사람들의 마음을 편안하게 해 줘요.", vi: "Giai điệu đàn Gayageum ngân vang trong trẻo và êm dịu giúp tâm hồn con người trở nên nhẹ nhõm, an yên." }
                ]
              },
              {
                ko: "거문고",
                hanja: "",
                en: "Geomungo (Korean 6-string plucked zither)",
                vi: "đàn Geomungo (đàn tranh 6 dây cổ truyền, dùng que gảy)",
                examples: [
                  { ko: "거문고 소리는 가야금에 비해 음색이 훨씬 낮고 깊으며 묵직해요.", vi: "Tiếng đàn Geomungo so với Gayageum thì trầm ấm, sâu lắng và chắc nịch hơn nhiều." },
                  { ko: "선비들은 마음을 수양하기 위해 방 안에서 거문고를 연주하곤 했어요.", vi: "Các bậc học giả xưa thường gảy đàn Geomungo trong thư phòng để tu dưỡng tâm tính." }
                ]
              },
              {
                ko: "해금",
                hanja: "奚琴",
                en: "Haegeum (Korean two-stringed vertical fiddle)",
                vi: "đàn Haegeum (đàn nhị Hàn Quốc)",
                examples: [
                  { ko: "해금은 두 줄 사이에 말총 활을 넣고 문질러서 애절한 소리를 내요.", vi: "Đàn Haegeum kéo cây vĩ lông đuôi ngựa giữa hai dây để cất lên những âm thanh da diết, nức nở." },
                  { ko: "현대 퓨전 국악에서도 해금의 독특한 음색이 아주 자주 활용돼요.", vi: "Trong âm nhạc truyền thống pha hiện đại (Fusion Gugak), âm sắc độc đáo của Haegeum được ứng dụng rất thường xuyên." }
                ]
              },
              {
                ko: "장구",
                hanja: "杖鼓",
                en: "Janggu (Korean hourglass-shaped drum)",
                vi: "trống Janggu (trống hình đồng hồ cát truyền thống)",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Janggu_drum.jpg/440px-Janggu_drum.jpg",
                examples: [
                  { ko: "흥겨운 사물놀이 공연에서 장구가 전체적인 박자와 리듬을 이끌어요.", vi: "Trong màn biểu diễn Samulnori rộn ràng, trống Janggu đóng vai trò dẫn dắt toàn bộ nhịp điệu bài nhạc." },
                  { ko: "장구는 왼쪽과 오른쪽 가죽의 두께가 달라 서로 다른 높낮이의 소리가 나요.", vi: "Trống Janggu có độ dày mặt da hai bên khác nhau nên phát ra âm sắc bổng trầm tách biệt rất thú vị." }
                ]
              },
              {
                ko: "줄을 튕기다",
                hanja: "",
                en: "to pluck / strum the strings",
                vi: "gảy dây đàn, búng dây đàn",
                examples: [
                  { ko: "손가락 끝으로 가야금 줄을 튕길 때 손끝에 전해지는 울림이 좋아요.", vi: "Khi dùng đầu ngón tay gảy dây đàn Gayageum, độ rung truyền đến đầu ngón tay cảm giác rất thích." },
                  { ko: "줄을 너무 세게 튕기면 줄이 끊어질 수 있으니 부드럽게 연주하세요.", vi: "Nếu búng dây đàn quá mạnh thì dây có thể bị đứt, nên hãy gảy một cách nhẹ nhàng thôi nhé." }
                ]
              },
              {
                ko: "악기를 타다",
                hanja: "",
                en: "to play / strum a string instrument",
                vi: "gảy đàn, chơi nhạc cụ dây (dùng riêng cho nhạc cụ dây truyền thống)",
                examples: [
                  { ko: "한복을 곱게 차려입고 가야금을 타는 연주자의 모습이 참 우아해 보여요.", vi: "Hình ảnh người nghệ sĩ diện bộ Hanbok tha thướt ngồi gảy đàn Gayageum trông thật thanh nhã." },
                  { ko: "어릴 때부터 악기를 타는 법을 배워서 연주 실력이 무척 수준급이에요.", vi: "Được học cách gảy đàn từ thuở nhỏ nên ngón đàn của bạn ấy đạt trình độ rất điêu luyện." }
                ]
              },
              {
                ko: "채로 치다",
                hanja: "",
                en: "to strike with a drumstick / mallet",
                vi: "gõ bằng dùi / que đánh trống",
                examples: [
                  { ko: "오른손에 쥔 대나무 채로 장구의 북편을 경쾌하게 쳤어요.", vi: "Tay phải cầm chiếc que tre, bạn ấy gõ rộn rã lên mặt trống Janggu." },
                  { ko: "북을 채로 힘차게 치자 심장을 울리는 웅장한 소리가 퍼져 나갔어요.", vi: "Khi chiếc dùi giáng mạnh mẽ lên mặt trống Buk, âm thanh hào sảng rung động cả con tim lan tỏa khắp nơi." }
                ]
              }
            ]
          },
          {
            category: "Hình học, Không gian & Từ vựng bài học (도형과 모양 · Ghi chú Notion)",
            words: [
              {
                ko: "정사각형",
                hanja: "正四角形",
                en: "square",
                vi: "hình vuông (hình có 4 cạnh bằng nhau và 4 góc vuông)",
                examples: [
                  { ko: "손수건을 반듯하게 접으니 예쁜 정사각형 모양이 되었어요.", vi: "Gấp chiếc khăn tay ngay ngắn lại thì thành hình vuông rất đẹp." },
                  { ko: "정사각형 모양의 타일을 바닥에 빈틈없이 깔았어요.", vi: "Những viên gạch hình vuông được lát khít khao trên mặt sàn." }
                ]
              },
              {
                ko: "직사각형",
                hanja: "直四角形",
                en: "rectangle",
                vi: "hình chữ nhật (hình có 4 góc vuông, 2 cạnh dài và 2 cạnh ngắn)",
                examples: [
                  { ko: "대부분의 스마트폰과 노트북 화면은 직사각형 모양이에요.", vi: "Hầu hết màn hình điện thoại thông minh và laptop đều có hình chữ nhật." },
                  { ko: "식탁이 긴 직사각형이라서 여러 사람이 넉넉하게 앉을 수 있어요.", vi: "Bàn ăn là hình chữ nhật dài nên nhiều người có thể ngồi thoải mái." }
                ]
              },
              {
                ko: "부등변사각형",
                hanja: "不等邊四角形",
                en: "trapezoid / irregular quadrilateral",
                vi: "hình thang / hình tứ giác cạnh không đều (부등변 = cạnh không bằng)",
                examples: [
                  { ko: "이 토지는 부등변사각형 형태라서 집을 짓기 전에 설계를 잘해야 해요.", vi: "Mảnh đất này có dạng hình thang nên cần phải thiết kế khéo léo trước khi xây nhà." },
                  { ko: "교과서에서 부등변사각형의 넓이를 구하는 공식에 대해 배웠어요.", vi: "Tôi đã học công thức tính diện tích hình tứ giác không đều trong sách giáo khoa." }
                ]
              },
              {
                ko: "평행사변형",
                hanja: "平行四邊形",
                en: "parallelogram",
                vi: "hình bình hành (hình có 2 cặp cạnh đối diện song song)",
                examples: [
                  { ko: "마주 보는 두 쌍의 변이 평행한 사각형을 평행사변형이라고 해요.", vi: "Hình tứ giác có hai cặp cạnh đối diện song song được gọi là hình bình hành." },
                  { ko: "건물의 독특한 창문들이 평행사변형 모양으로 비스듬히 배치되어 있어요.", vi: "Những ô cửa sổ độc đáo của tòa nhà được bài trí nghiêng theo hình bình hành." }
                ]
              },
              {
                ko: "마름모",
                hanja: "",
                en: "rhombus / diamond shape",
                vi: "hình thoi (hình tứ giác có 4 cạnh bằng nhau, 2 đường chéo vuông góc)",
                image: "image.png",
                examples: [
                  { ko: "한국의 전통 연은 보통 마름모 모양이나 네모 모양으로 만들어요.", vi: "Diều truyền thống của Hàn Quốc thường được làm theo hình thoi hoặc hình vuông." },
                  { ko: "스웨터에 알록달록한 마름모 무늬가 예쁘게 수놓아져 있어요.", vi: "Trên chiếc áo len có thêu hoa văn hình thoi sặc sỡ rất đẹp." }
                ]
              },
              {
                ko: "동그라미",
                hanja: "",
                en: "circle",
                vi: "hình tròn, vòng tròn (tương tự 'roundy')",
                examples: [
                  { ko: "정답이라고 생각하는 번호에 동그라미를 치세요.", vi: "Hãy khoanh tròn vào số mà bạn cho là câu trả lời đúng." },
                  { ko: "아이들이 손을 잡고 커다란 동그라미를 그리며 춤을 춰요.", vi: "Các em nhỏ nắm tay nhau tạo thành vòng tròn lớn và cùng nhảy múa." }
                ]
              },
              {
                ko: "타원형",
                hanja: "楕圓形",
                en: "oval / ellipse",
                vi: "hình bầu dục, hình elip",
                examples: [
                  { ko: "거실 벽에 걸린 타원형 거울이 방 분위기를 세련되게 만들어 줘요.", vi: "Chiếc gương hình bầu dục treo trên tường phòng khách khiến không gian thêm trang nhã." },
                  { ko: "지구는 태양 주위를 완벽한 원이 아닌 타원형 궤도로 돌고 있어요.", vi: "Trái Đất quay quanh Mặt Trời theo quỹ đạo hình elip chứ không phải hình tròn hoàn hảo." }
                ]
              },
              {
                ko: "울퉁불퉁하다",
                hanja: "",
                en: "to be rugged / bumpy / uneven",
                vi: "gồ ghề, khấp khểnh, mấp mô, khúc khuỷu",
                examples: [
                  { ko: "산길이 울퉁불퉁해서 운전할 때 속도를 줄여야 해요.", vi: "Đường núi gồ ghề khúc khuỷu nên khi lái xe phải giảm tốc độ." },
                  { ko: "울퉁불퉁한 돌길을 오래 걸었더니 발바닥이 아파요.", vi: "Đi bộ lâu trên con đường đá lởm chởm gập ghềnh khiến lòng bàn chân tôi đau nhức." }
                ]
              },
              {
                ko: "손재주가 좋다",
                hanja: "",
                en: "to have great dexterity / be handy with one's hands",
                vi: "khéo tay, tài hoa, giỏi làm đồ thủ công",
                examples: [
                  { ko: "친구는 손재주가 좋아서 무엇이든 뚝딱 잘 만들어 내요.", vi: "Bạn tôi rất khéo tay nên hễ làm gì là thoăn thoắt tạo ra ngay." },
                  { ko: "손재주가 좋은 사람들은 천 조각을 모아 아름다운 조각보를 만들어요.", vi: "Những người khéo tay thường gom các mảnh vải vụn lại để may thành tấm vải chắp vá tuyệt đẹp." }
                ]
              },
              {
                ko: "참다",
                hanja: "",
                en: "to endure / bear / withstand",
                vi: "nhẫn nại, chịu đựng, kiềm chế",
                examples: [
                  { ko: "너무 아팠지만 주사를 맞을 때 소리 내지 않고 꾹 참았어요.", vi: "Dù rất đau nhưng khi tiêm tôi đã cắn răng chịu đựng không hề kêu ca." },
                  { ko: "웃음이 터져 나오려는 것을 가까스로 참았어요.", vi: "Tôi phải cố lắm mới kìm nén được cơn cười suýt bật ra." }
                ]
              },
              {
                ko: "야경",
                hanja: "夜景",
                en: "night view / nightscape",
                vi: "cảnh đêm, quang cảnh buổi tối",
                examples: [
                  { ko: "남산 서울타워에서 내려다보는 서울의 야경은 정말 환상적이에요.", vi: "Quang cảnh đêm của Seoul nhìn từ tháp Namsan xuống thực sự đẹp huyền ảo." },
                  { ko: "야경이 아름다운 한강 다리를 건너며 산책을 즐겼어요.", vi: "Tôi tận hưởng chuyến đi dạo khi băng qua cây cầu sông Hàn rực rỡ ánh đèn đêm." }
                ]
              },
              {
                ko: "평생 함께하다",
                hanja: "平生",
                en: "to stay together for a lifetime",
                vi: "gắn bó cả đời, đi cùng nhau trọn kiếp",
                examples: [
                  { ko: "두 사람은 서로를 깊이 사랑하며 평생 함께하기로 약속했어요.", vi: "Hai người yêu thương nhau sâu sắc và hứa sẽ gắn bó bên nhau trọn cuộc đời." },
                  { ko: "어릴 때부터 키운 반려견과 평생 함께하며 소중한 추억을 쌓았어요.", vi: "Nuôi chú cún từ nhỏ và gắn bó suốt cuộc đời, tôi đã tích lũy biết bao kỷ niệm quý giá." }
                ]
              },
              {
                ko: "캠핑장",
                hanja: "",
                en: "campground / campsite",
                vi: "khu cắm trại, bãi cắm trại ngoài trời",
                examples: [
                  { ko: "주말에 가족들과 함께 공기 맑은 산속 캠핑장에 다녀왔어요.", vi: "Cuối tuần tôi cùng gia đình đi đến khu cắm trại giữa núi rừng không khí trong lành." },
                  { ko: "한탄강 캠핑장은 시설이 깨끗하고 주변 경치가 좋기로 유명해요.", vi: "Khu cắm trại sông Hantan nổi tiếng với cơ sở vật chất sạch sẽ và cảnh quan xung quanh tuyệt đẹp." }
                ]
              },
              {
                ko: "래프팅",
                hanja: "",
                en: "whitewater rafting",
                vi: "chèo xuồng / thuyền cao su vượt thác ghềnh",
                examples: [
                  { ko: "여름철에 한탄강이나 동강에서 즐기는 래프팅은 스릴이 넘쳐요.", vi: "Chèo thuyền vượt thác ở sông Hantan hay sông Dong vào mùa hè đem lại cảm giác vô cùng phấn khích." },
                  { ko: "구명조끼를 단단히 입고 친구들과 시원하게 래프팅을 즐겼어요.", vi: "Mặc áo phao cẩn thận, tôi cùng bạn bè thích thú trải nghiệm chèo thuyền vượt thác mát lạnh." }
                ]
              }
            ]
          }
        ],

        dialogues: [
          {
            shortTitle: "Listening 0 (Khởi động)",
            title: "Listening 0 · Khởi động: Kế hoạch cuối tuần & Đi cắm trại (주말 캠핑과 낚시)",
            audioText: "이번 주말에 뭐 해요? 오랜만에 가족하고 캠핑 가기로 했어요. 재미있겠네요. 요즘 날씨가 좋아서 캠핑하면 아주 좋을 거예요. 네. 그동안 일이 많아서 힘들었는데 캠핑 가서 스트레스 다 풀고 오려고요. 민수 씨는 주말에 뭐 해요? 저는 요즘 시간이 나면 낚시하러 가요. 조용하고 경치 좋은 곳에서 낚시를 하면 기분이 정말 좋아져요. 다음에 낚시하러 갈 때 따라가도 돼요? 전부터 낚시를 한번 배워 보고 싶었어요. 좋아요. 그럼 다음에 낚시할 수 있는 곳으로 캠핑을 떠나면 어때요? 그거 좋은 생각인데요.",
            lines: [
              { speaker: "남", ko: "이번 주말에 뭐 해요?", vi: "Cuối tuần này bạn làm gì?" },
              { speaker: "여", ko: "오랜만에 가족하고 캠핑 가기로 했어요.", vi: "Lâu rồi nên mình quyết định đi cắm trại với gia đình." },
              { speaker: "남", ko: "재미있겠네요. 요즘 날씨가 좋아서 캠핑하면 아주 좋을 거예요.", vi: "Nghe vui đấy. Dạo này thời tiết đẹp nên đi cắm trại sẽ rất tuyệt." },
              { speaker: "여", ko: "네. 그동안 일이 많아서 힘들었는데 캠핑 가서 스트레스 다 풀고 오려고요. 민수 씨는 주말에 뭐 해요?", vi: "Vâng. Dạo này công việc nhiều nên hơi mệt, mình muốn đi cắm trại để giải tỏa hết stress. Còn bạn Min-su cuối tuần làm gì?" },
              { speaker: "남", ko: "저는 요즘 시간이 나면 낚시하러 가요. 조용하고 경치 좋은 곳에서 낚시를 하면 기분이 정말 좋아져요.", vi: "Dạo này khi có thời gian thì tôi đi câu cá. Nếu câu cá ở nơi yên tĩnh và có cảnh đẹp thì tâm trạng sẽ rất tốt." },
              { speaker: "여", ko: "다음에 낚시하러 갈 때 따라가도 돼요? 전부터 낚시를 한번 배워 보고 싶었어요.", vi: "Lần sau bạn đi câu cá, mình đi theo được không? Mình muốn thử học câu cá từ lâu rồi." },
              { speaker: "남", ko: "좋아요. 그럼 다음에 낚시할 수 있는 곳으로 캠핑을 떠나면 어때요?", vi: "Được thôi. Vậy lần sau mình đi cắm trại ở nơi có thể câu cá thì sao?" },
              { speaker: "여", ko: "그거 좋은 생각인데요.", vi: "Ý đó hay đấy." }
            ],
            notes: [
              "V-기로 했다: Quyết định, định sẽ, hứa sẽ làm việc gì đó (thể hiện quyết tâm). Ví dụ: 출퇴근 시간에는 차가 밀리니까 조금 일찍 나가기로 해요.",
              "V + (으)려고 하다: Có ý định làm gì (dự định tương lai, chưa chắc chắn). Ví dụ: 내일부터 운동을 시작하려고 해요.",
              "(으)러 가다/오다/다니다: Đi/đến đâu để làm việc gì. Ví dụ: 백화점에 선물을 사러 가요 (Tôi đến tiệm bách hóa để mua quà)."
            ],
            vocab: [
              { ko: "낚시하다", vi: "câu cá", en: "to go fishing" },
              { ko: "낚다", vi: "câu được cá, bắt được cá", en: "to hook, catch fish" },
              { ko: "시간이 나다", vi: "có thời gian rảnh", en: "to have free time" },
              { ko: "따라가다", vi: "đi theo, cùng đi theo", en: "to follow, accompany" },
              { ko: "전부터", vi: "từ trước tới nay, bấy lâu nay", en: "for a long time, from before" },
              { ko: "떠나다", vi: "lên đường, khởi hành, rời đi", en: "to set off, leave" },
              { ko: "그거 좋은 생각인데요", vi: "Ý kiến đó hay đấy", en: "That's a good idea" },
              { ko: "스트레스를 풀다", vi: "giải tỏa căng thẳng, xả stress", en: "to relieve stress" },
              { ko: "캠핑장", vi: "khu cắm trại", en: "campsite, campground" }
            ],
            comprehension: [
              {
                question: "여자는 이번 주말에 무엇을 하기로 했습니까?",
                options: [
                  "오랜만에 가족과 함께 캠핑을 가기로 했다",
                  "혼자 조용히 낚시를 배우러 가기로 했다",
                  "회사에 출근해서 밀린 일을 하기로 했다",
                  "백화점에 선물을 사러 가기로 했다"
                ],
                correctIndex: 0,
                explanation: "Người nữ chia sẻ: '오랜만에 가족하고 캠핑 가기로 했어요.'"
              },
              {
                question: "두 사람이 다음에 함께 하기로 계획한 것은 무엇입니까?",
                options: [
                  "집에서 영화를 보기로 했다",
                  "낚시를 할 수 있는 곳으로 캠핑을 떠나기로 했다",
                  "백화점에서 쇼핑을 하기로 했다",
                  "음악 콘서트에 가기로 했다"
                ],
                correctIndex: 1,
                explanation: "Người nam đề nghị: '그럼 다음에 낚시할 수 있는 곳으로 캠핑을 떠나면 어때요?' và người nữ đồng ý '그거 좋은 생각인데요.'"
              }
            ]
          },
          {
            shortTitle: "Listening 1",
            title: "Listening 1 · Đàn Gayageum và Ali mù âm nhạc (가야금 배우기)",
            image: "image 3.png",
            audioText: "줄리앙 씨는 주말에 보통 뭐 해요? 요즘 가야금 배우러 다니는데 무척 재미있어요. 가야금요? 그게 뭐예요? 한국 전통 악기예요. 긴 네모 모양 나무판 위에 줄이 12개 있어요. 아, 본 적이 있어요. 그거 크기가 꽤 큰 것 같던데…… 네, 사람 키만 해요. 그런데 연주는 어떻게 해요? 손가락으로 줄을 누르거나 튕겨서 소리를 내요. 소리가 참 좋은데 알리 씨도 배워 볼래요? 아유, 전 음치라서 악기는 배울 생각도 못 해요.",
            lines: [
              { speaker: "알리", ko: "줄리앙 씨는 주말에 보통 뭐 해요?", vi: "Cuối tuần thì anh Julien thường làm gì?" },
              { speaker: "줄리앙", ko: "요즘 가야금 배우러 다니는데 무척 재미있어요.", vi: "Dạo này tôi đang đi học đàn gayageum, rất là thú vị." },
              { speaker: "알리", ko: "가야금요? 그게 뭐예요?", vi: "Gayageum à? Đó là gì vậy?" },
              { speaker: "줄리앙", ko: "한국 전통 악기예요. 긴 네모 모양 나무판 위에 줄이 12개 있어요.", vi: "Là nhạc cụ truyền thống của Hàn Quốc. Trên một tấm gỗ hình chữ nhật có 12 dây." },
              { speaker: "알리", ko: "아, 본 적이 있어요. 그거 크기가 꽤 큰 것 같던데……", vi: "À, tôi đã từng thấy rồi. Cái đó có vẻ khá to nhỉ…" },
              { speaker: "줄리앙", ko: "네, 사람 키만 해요.", vi: "Vâng, cao gần bằng người." },
              { speaker: "알리", ko: "그런데 연주는 어떻게 해요?", vi: "Nhưng chơi như thế nào?" },
              { speaker: "줄리앙", ko: "손가락으로 줄을 누르거나 튕겨서 소리를 내요. 소리가 참 좋은데 알리 씨도 배워 볼래요?", vi: "Dùng ngón tay nhấn hoặc gảy dây để tạo ra âm thanh. Âm thanh rất hay, Ali cũng thử học không?" },
              { speaker: "알리", ko: "아유, 전 음치라서 악기는 배울 생각도 못 해요.", vi: "Ôi, tôi bị mù nhạc nên đến việc học nhạc cụ cũng không dám nghĩ tới." }
            ],
            notes: [
              "N만 하다: So sánh kích thước hoặc mức độ bằng với danh từ. Ví dụ: '사람 키만 해요' (to/cao gần bằng cả chiều cao người).",
              "V-(으)ㄹ 생각도 못 하다: Thậm chí không dám nghĩ tới. Ví dụ: '음치라서 악기는 배울 생각도 못 해요' (Vì mù nhạc nên đến việc học nhạc cụ cũng không dám nghĩ tới)."
            ],
            vocab: [
              { ko: "가야금", vi: "đàn Gayageum (đàn tranh 12 dây truyền thống)", en: "gayageum (Korean 12-string zither)" },
              { ko: "네모 모양", vi: "hình chữ nhật / hình tứ giác", en: "rectangular shape" },
              { ko: "나무판", vi: "tấm ván gỗ", en: "wooden board" },
              { ko: "크기", vi: "kích thước, cỡ", en: "size" },
              { ko: "사람 키만 하다", vi: "to/cao bằng người", en: "as tall as a person" },
              { ko: "연주하다", vi: "biểu diễn nhạc cụ", en: "to perform, play instrument" },
              { ko: "누르다", vi: "nhấn, ấn ngón tay", en: "to press" },
              { ko: "튕기다", vi: "gảy, búng dây đàn", en: "to pluck, flick string" },
              { ko: "음치", vi: "người mù âm nhạc, hát lệch tông", en: "tone-deaf person" },
              { ko: "배우러 다니다", vi: "đi học thường xuyên", en: "to attend classes" },
              { ko: "무척", vi: "vô cùng, rất", en: "very, extremely" }
            ],
            comprehension: [
              {
                question: "가야금의 모양과 크기에 대한 설명으로 맞는 것은 무엇입니까?",
                options: [
                  "긴 네모 모양 나무판 위에 줄이 12개 있고 사람 키만 하다",
                  "둥근 플라스틱 판 위에 줄이 6개 있고 손바닥만 하다",
                  "세모난 쇠판 위에 줄이 20개 있고 방 전체만 하다",
                  "작고 납작해서 주머니에 넣고 다닐 수 있다"
                ],
                correctIndex: 0,
                explanation: "Julien nói: '긴 네모 모양 나무판 위에 줄이 12개 있어요... 사람 키만 해요.'"
              },
              {
                question: "알리 씨가 가야금을 배울 생각도 못 하는 이유는 무엇입니까?",
                options: [
                  "시간이 없어서",
                  "음치라서",
                  "손가락이 아파서",
                  "가야금이 너무 비싸서"
                ],
                correctIndex: 1,
                explanation: "Ali bảo: '아유, 전 음치라서 악기는 배울 생각도 못 해요.'"
              }
            ]
          },
          {
            shortTitle: "Listening 2",
            title: "Listening 2 · Leo núi Naejangsan & Cắm trại sông Hantan (내장산 등산과 캠핑)",
            image: "Screenshot_2026-05-03_210240.png",
            audioText: "이번 연휴에 내장산으로 등산 갈까? 내장산은 처음 듣는데 서울 근처야? 아니, 전라도에 있는데 단풍이 아름답기로 유명해. 등산도 좋지만 캠핑은 어때? 난 캠핑 생각만 해도 마음이 설레. 캠핑은 왠지 힘들 것 같아. 잠자리도 불편하고 준비할 것도 많잖아. 그래도 자연 속에서 하룻밤을 보내면 마음이 얼마나 편안해지는데…. 고향에서나 여행할 때마다 텐트를 차에 싣고 다녔어. 너 진짜 캠핑 좋아하는구나. 캠핑장은 좀 알아봤어? 당연하지. 한탄강 캠핑장이 좋다고 들었어. 래프팅도 정말 해 볼 만하대.",
            lines: [
              { speaker: "정우", ko: "이번 연휴에 내장산으로 등산 갈까?", vi: "Dịp nghỉ này đi leo núi Naejangsan nhé?" },
              { speaker: "스티븐", ko: "내장산은 처음 듣는데 서울 근처야?", vi: "Naejangsan à? Tôi chưa nghe bao giờ, gần Seoul không?" },
              { speaker: "정우", ko: "아니, 전라도에 있는데 단풍이 아름답기로 유명해.", vi: "Không, ở Jeolla, nổi tiếng vì lá đỏ rất đẹp." },
              { speaker: "스티븐", ko: "등산도 좋지만 캠핑은 어때? 난 캠핑 생각만 해도 마음이 설레.", vi: "Leo núi cũng tốt nhưng đi cắm trại thì sao? Chỉ cần nghĩ đến camping thôi là tôi đã thấy háo hức rồi." },
              { speaker: "정우", ko: "캠핑은 왠지 힘들 것 같아. 잠자리도 불편하고 준비할 것도 많잖아.", vi: "Cắm trại có vẻ hơi vất vả. Chỗ ngủ cũng bất tiện, mà còn phải chuẩn bị nhiều thứ nữa." },
              { speaker: "스티븐", ko: "그래도 자연 속에서 하룻밤을 보내면 마음이 얼마나 편안해지는데…. 고향에서나 여행할 때마다 텐트를 차에 싣고 다녔어.", vi: "Nhưng nếu ở trong thiên nhiên một đêm thì tâm trạng sẽ thoải mái biết bao…. Ở quê hay mỗi lần đi du lịch tôi đều chở lều theo xe." },
              { speaker: "정우", ko: "너 진짜 캠핑 좋아하는구나. 캠핑장은 좀 알아봤어?", vi: "Cậu đúng là thích camping thật đấy. Đã tìm hiểu khu cắm trại chưa?" },
              { speaker: "스티븐", ko: "당연하지. 한탄강 캠핑장이 좋다고 들었어. 래프팅도 정말 해 볼 만하대.", vi: "Tất nhiên rồi. Tôi nghe nói khu cắm trại sông Hantan rất tốt. Người ta nói rằng chèo thuyền vượt thác cũng rất đáng để thử." }
            ],
            notes: [
              "A/V-기로 유명하다: Nổi tiếng vì một đặc điểm nào đó. Ví dụ: '단풍이 아름답기로 유명해' (nổi tiếng vì lá phong mùa thu rất đẹp).",
              "~생각만 해도: Chỉ nghĩ đến thôi cũng... Ví dụ: '난 캠핑 생각만 해도 마음이 설레' (Tôi chỉ cần nghĩ đến cắm trại thôi là lòng đã rộn ràng).",
              "~구나 / ~군요: Cảm thán khi nhận ra điều gì mới. Ví dụ: '너 진짜 캠핑 좋아하는구나!' (Hóa ra cậu thích cắm trại thật đấy nhỉ!), '한국말을 잘하는군요!'",
              "V-(으)ㄹ 만하다: Đáng làm việc gì đó. Ví dụ: '래프팅도 정말 해 볼 만하대' (Nghe nói chèo thuyền vượt thác rất đáng thử)."
            ],
            vocab: [
              { ko: "연휴", vi: "kỳ nghỉ dài ngày liên tiếp", en: "long weekend, consecutive holidays" },
              { ko: "내장산", vi: "núi Naejangsan (nổi tiếng lá đỏ ở Jeolla)", en: "Naejangsan mountain" },
              { ko: "단풍", vi: "lá phong đỏ, lá mùa thu", en: "autumn leaves, fall foliage" },
              { ko: "마음이 설레다", vi: "lòng rạo rực, xao xuyến, háo hức", en: "heart flutters with excitement" },
              { ko: "왠지", vi: "không hiểu sao, có vẻ như", en: "somehow, for some reason" },
              { ko: "잠자리", vi: "chỗ ngủ qua đêm", en: "sleeping place, bed" },
              { ko: "불편하다", vi: "bất tiện, khó chịu", en: "uncomfortable, inconvenient" },
              { ko: "하룻밤을 보내다", vi: "trải qua một đêm", en: "to spend a night" },
              { ko: "텐트를 차에 싣다", vi: "chất lều lên ô tô", en: "to load tent in car" },
              { ko: "한탄강 캠핑장", vi: "khu cắm trại sông Hantan", en: "Hantan River campground" },
              { ko: "래프팅", vi: "chèo xuồng vượt ghềnh thác", en: "whitewater rafting" },
              { ko: "당연하지", vi: "đương nhiên rồi", en: "of course, naturally" },
              { ko: "빙어 낚시", vi: "câu cá băng (ở Gangwon-do)", en: "ice fishing (smelt)" },
              { ko: "스킨스쿠버", vi: "lặn biển (ở Jeju)", en: "scuba diving" },
              { ko: "수상스키", vi: "lướt ván nước (ở hồ Cheongpyeong, sông Hàn)", en: "waterskiing" }
            ],
            comprehension: [
              {
                question: "정우가 처음에 가자고 제안한 내장산의 특징은 무엇입니까?",
                options: [
                  "단풍이 아름답기로 유명하다",
                  "바다가 가깝기로 유명하다",
                  "스킨스쿠버를 할 수 있다",
                  "서울 한가운데에 위치해 있다"
                ],
                correctIndex: 0,
                explanation: "Jungwoo nói: '전라도에 있는데 단풍이 아름답기로 유명해.'"
              },
              {
                question: "스티븐이 추천한 한탄강 캠핑장에서 해 볼 만한 활동은 무엇입니까?",
                options: [
                  "래프팅",
                  "빙어 낚시",
                  "스킨스쿠버",
                  "수상스키"
                ],
                correctIndex: 0,
                explanation: "Steven nói: '한탄강 캠핑장이 좋다고 들었어. 래프팅도 정말 해 볼 만하대.'"
              }
            ]
          },
          {
            shortTitle: "Listening 3",
            title: "Listening 3 · Quên ổ cứng ngoài ở nhà (외장 하드 디스크 찾기)",
            image: "image 5.png",
            audioText: "여보세요. 엄마, 지금 어디 계세요? 집이세요? 응, 집인데. 엄마, 저 좀 도와주세요. 시간이 없어서 그래요. 왜? 뭐 두고 갔니? 엄마, 어떻게 아셨어요? 아이고, 내가 왜 몰라. 네가 원래 깜빡 잘 잊어버리기로 유명하잖니? 네, 보고서를 깜빡 잊고 집에 두고 왔어요. 오늘까지 내야 하는데…… 그래? 어떡하니? 내가 갖다 줄까? 아니요, 외장 하드 디스크를 안 가져 왔으니까 우선 하드 디스크 좀 찾아 봐 주세요. 제 방 책상 위에 있을 거예요. 하드 디스크? 컴퓨터 말이니? 그게 아니고요. 엄마, 책상 위 노트북 옆에 긴 네모 모양의 물건이 하나 있을 거예요. 색깔은 까만색이고 크기는 휴대폰만 한데 휴대폰보다는 좀 두꺼워요. 짧은 전선이 달려 있고요. 까맣고 휴대폰만 한 물건이라고 했지? 그래, 여기 있구나. 디스크라고 해서 둥근 모양인 줄 알았더니 사각형이네. 이걸 어떻게 할까? 엄마, 거기에 있는 파일 하나만 이메일로 보내 주세요. 파일? 얘, 내가 파일은 한 번도 안 보내 봤는데…… 어떻게 하는 거니? 아! 할 수 없네요. 그냥 두세요. 제가 갈게요.",
            lines: [
              { speaker: "아들", ko: "여보세요. 엄마, 지금 어디 계세요? 집이세요?", vi: "Alo. Mẹ ơi, mẹ đang ở đâu? Ở nhà không ạ?" },
              { speaker: "어머니", ko: "응, 집인데.", vi: "Ừ, mẹ đang ở nhà." },
              { speaker: "아들", ko: "엄마, 저 좀 도와주세요. 시간이 없어서 그래요.", vi: "Mẹ ơi, giúp con với. Con không có thời gian." },
              { speaker: "어머니", ko: "왜? 뭐 두고 갔니?", vi: "Sao vậy? Con để quên gì à?" },
              { speaker: "아들", ko: "엄마, 어떻게 아셨어요?", vi: "Mẹ, sao mẹ biết vậy?" },
              { speaker: "어머니", ko: "아이고, 내가 왜 몰라. 네가 원래 깜빡 잘 잊어버리기로 유명하잖니?", vi: "Trời ơi, sao mẹ không biết. Con vốn nổi tiếng hay đãng trí hay quên mà." },
              { speaker: "아들", ko: "네, 보고서를 깜빡 잊고 집에 두고 왔어요. 오늘까지 내야 하는데……", vi: "Dạ, con quên báo cáo và để ở nhà. Hôm nay phải nộp rồi…" },
              { speaker: "어머니", ko: "그래? 어떡하니? 내가 갖다 줄까?", vi: "Vậy à? Làm sao đây? Mẹ mang cho con nhé?" },
              { speaker: "아들", ko: "아니요, 외장 하드 디스크를 안 가져 왔으니까 우선 하드 디스크 좀 찾아 봐 주세요. 제 방 책상 위에 있을 거예요.", vi: "Không ạ, con không mang ổ cứng ngoài. Mẹ tìm giúp con cái ổ cứng trước nhé. Nó ở trên bàn trong phòng con." },
              { speaker: "어머니", ko: "하드 디스크? 컴퓨터 말이니?", vi: "Ổ cứng à? Máy tính hả con?" },
              { speaker: "아들", ko: "그게 아니고요. 엄마, 책상 위 노트북 옆에 긴 네모 모양의 물건이 하나 있을 거예요. 색깔은 까만색이고 크기는 휴대폰만 한데 휴대폰보다는 좀 두꺼워요. 짧은 전선이 달려 있고요.", vi: "Không phải ạ. Trên bàn cạnh laptop có một vật hình chữ nhật dài. Màu đen, cỡ bằng điện thoại nhưng dày hơn điện thoại một chút. Có một đoạn dây ngắn gắn kèm." },
              { speaker: "어머니", ko: "까맣고 휴대폰만 한 물건이라고 했지? 그래, 여기 있구나. 디스크라고 해서 둥근 모양인 줄 알았더니 사각형이네. 이걸 어떻게 할까?", vi: "Vật màu đen cỡ điện thoại đúng không? Ừ, thấy ở đây rồi. Tưởng “đĩa” là hình tròn, hóa ra là hình chữ nhật. Giờ làm gì với cái này?" },
              { speaker: "아들", ko: "엄마, 거기에 있는 파일 하나만 이메일로 보내 주세요.", vi: "Mẹ gửi giúp con một file trong đó qua email nhé." },
              { speaker: "어머니", ko: "파일? 얘, 내가 파일은 한 번도 안 보내 봤는데…… 어떻게 하는 거니?", vi: "File à? Mẹ chưa gửi file bao giờ… làm sao đây con?" },
              { speaker: "아들", ko: "아! 할 수 없네요. 그냥 두세요. 제가 갈게요.", vi: "À! Không còn cách nào khác rồi. Mẹ cứ để đó đi, con tự chạy về lấy." }
            ],
            notes: [
              "N만 하다: So sánh kích thước cỡ như. Ví dụ: '크기는 휴대폰만 한데' (kích thước to cỡ bằng chiếc điện thoại).",
              "-기로 유명하다: Nổi tiếng với thói quen/tính cách. Ví dụ: '네가 원래 깜빡 잘 잊어버리기로 유명하잖니?' (Con vốn nổi tiếng hay quên khuấy mà).",
              "-았/었더니: Tưởng là... làm gì thì hóa ra. Ví dụ: '디스크라고 해서 둥근 모양인 줄 알았더니 사각형이네' (Tưởng đĩa là hình tròn hóa ra lại là hình chữ nhật)."
            ],
            vocab: [
              { ko: "외장 하드 디스크", vi: "ổ cứng di động gắn ngoài", en: "external hard drive" },
              { ko: "두고 오다 / 두고 가다", vi: "để quên ở đâu", en: "to leave behind" },
              { ko: "깜빡 잊어버리다", vi: "quên khuấy mất, lơ đễnh quên", en: "to completely forget, slip one's mind" },
              { ko: "내다", vi: "nộp (báo cáo, bài tập)", en: "to submit, hand in" },
              { ko: "갖다 주다", vi: "mang đến cho", en: "to bring and give" },
              { ko: "긴 네모 모양", vi: "hình chữ nhật dài", en: "long rectangular shape" },
              { ko: "까만색", vi: "màu đen", en: "black color" },
              { ko: "두껍다", vi: "dày dặn", en: "thick" },
              { ko: "전선", vi: "dây điện, dây cáp nối", en: "cable, wire" },
              { ko: "달려 있다", vi: "được gắn kèm theo", en: "to be attached, hung" },
              { ko: "둥근 모양", vi: "hình tròn", en: "round shape" },
              { ko: "사각형", vi: "hình chữ nhật, tứ giác", en: "quadrangle, rectangle" },
              { ko: "파일", vi: "tệp tin, file", en: "file" },
              { ko: "이메일로 보내다", vi: "gửi qua email", en: "to send via email" },
              { ko: "그냥 두다", vi: "cứ để nguyên như vậy", en: "to leave it as it is" }
            ],
            comprehension: [
              {
                question: "아들이 찾는 외장 하드 디스크의 생김새는 어떻습니까?",
                options: [
                  "까만색이고 휴대폰만 한 긴 네모 모양이며 전선이 달려 있다",
                  "하얗고 동전만 한 둥근 모양이다",
                  "빨간색이고 책처럼 크고 얇은 네모 모양이다",
                  "노트북 안에 내장되어 있는 부품이다"
                ],
                correctIndex: 0,
                explanation: "Người con miêu tả: '책상 위 노트북 옆에 긴 네모 모양... 색깔은 까만색이고 크기는 휴대폰만 한데... 짧은 전선이 달려 있고요.'"
              },
              {
                question: "대화의 마지막에 아들이 집으로 직접 가겠다고 한 이유는 무엇입니까?",
                options: [
                  "어머니가 파일을 이메일로 보내 본 적이 없어서",
                  "어머니가 집에 안 계셔서",
                  "하드 디스크가 고장 났다고 해서",
                  "휴대폰 배터리가 다 닳아서"
                ],
                correctIndex: 0,
                explanation: "Mẹ nói: '내가 파일은 한 번도 안 보내 봤는데…… 어떻게 하는 거니?' nên người con bảo: '할 수 없네요. 그냥 두세요. 제가 갈게요.'"
              }
            ]
          },
          {
            shortTitle: "Listening 4",
            title: "Listening 4 · Trò chơi thả diều truyền thống (연 만들기와 연날리기)",
            image: "image 6.png",
            audioText: "오늘은 연을 만들어 보겠어요. 한국에서 연을 만들어 본 적이 있어요? 아니요. 하지만 한강공원에서 아이들이 연날리기 하는 걸 본 적이 있어요. 연이 마름모 모양이고 꼬리가 길던데요? 한국의 연은 다 그렇게 생겼나요? 그렇지 않아요. 세모, 네모, 마름모 등 여러 가지 모양이 있어요. 오늘은 이 연을 만들어 봐요. 이건 네모 모양이네요. 그래요. 이제 만들어 볼까요? 먼저 종이 가운데 동그랗게 구멍을 내세요. 연에 구멍을 만들어 주면 연이 잘 날거든요. 구멍은 얼마나 크게 만들어야 해요? 이 음악 CD만 하게 만들면 돼요. CD를 줄 테니까 종이 위에 놓고 동그라미를 그린 후에 자르세요. 이렇게 하면 돼요? 네, 좋아요. 이제 뒤쪽에 대나무를 붙이고 실을 묶으면 돼요. 어서 날려 보고 싶어요. 그럼 나가서 한번 날려 봐요. 누가 연날리기를 잘하는지 볼까요? 제가 이길걸요. 제가 고향에서 연날리기 잘하기로 유명했거든요.",
            lines: [
              { speaker: "선생님", ko: "오늘은 연을 만들어 보겠어요. 한국에서 연을 만들어 본 적이 있어요?", vi: "Hôm nay chúng ta sẽ làm diều. Bạn đã từng làm diều ở Hàn Quốc chưa?" },
              { speaker: "학생", ko: "아니요. 하지만 한강공원에서 아이들이 연날리기 하는 걸 본 적이 있어요. 연이 마름모 모양이고 꼬리가 길던데요? 한국의 연은 다 그렇게 생겼나요?", vi: "Chưa ạ. Nhưng em đã từng thấy các bạn nhỏ thả diều ở công viên sông Hàn. Diều có hình thoi và có chiếc đuôi rất dài. Diều ở Hàn Quốc đều có hình như vậy phải không ạ?" },
              { speaker: "선생님", ko: "그렇지 않아요. 세모, 네모, 마름모 등 여러 가지 모양이 있어요. 오늘은 이 연을 만들어 봐요.", vi: "Không phải đâu. Có nhiều hình dạng khác nhau như hình tam giác, hình vuông, hình thoi... Hôm nay chúng ta sẽ làm chiếc diều này." },
              { speaker: "학생", ko: "이건 네모 모양이네요.", vi: "Chiếc này có hình vuông nhỉ." },
              { speaker: "선생님", ko: "그래요. 이제 만들어 볼까요? 먼저 종이 가운데 동그랗게 구멍을 내세요. 연에 구멍을 만들어 주면 연이 잘 날거든요.", vi: "Đúng rồi. Bây giờ chúng ta bắt đầu làm nhé. Trước tiên hãy khoét một lỗ hình tròn ở giữa tờ giấy. Nếu làm một cái lỗ trên diều thì diều sẽ bay tốt hơn." },
              { speaker: "학생", ko: "구멍은 얼마나 크게 만들어야 해요?", vi: "Em phải làm cái lỗ to cỡ nào ạ?" },
              { speaker: "선생님", ko: "이 음악 CD만 하게 만들면 돼요. CD를 줄 테니까 종이 위에 놓고 동그라미를 그린 후에 자르세요.", vi: "Chỉ cần làm bằng kích thước của chiếc đĩa CD ca nhạc này là được. Cô sẽ đưa em chiếc CD, em đặt nó lên tờ giấy, vẽ theo hình tròn rồi cắt ra nhé." },
              { speaker: "학생", ko: "이렇게 하면 돼요?", vi: "Làm như thế này được chưa ạ?" },
              { speaker: "선생님", ko: "네, 좋아요. 이제 뒤쪽에 대나무를 붙이고 실을 묶으면 돼요.", vi: "Được rồi, tốt lắm. Bây giờ chỉ cần gắn thanh tre vào mặt sau và buộc dây là xong." },
              { speaker: "학생", ko: "어서 날려 보고 싶어요.", vi: "Em muốn thử thả ngay quá." },
              { speaker: "선생님", ko: "그럼 나가서 한번 날려 봐요. 누가 연날리기를 잘하는지 볼까요?", vi: "Vậy chúng ta ra ngoài thả thử nhé. Xem ai là người thả diều giỏi hơn nào." },
              { speaker: "학생", ko: "제가 이길걸요. 제가 고향에서 연날리기 잘하기로 유명했거든요.", vi: "Chắc chắn em sẽ thắng thôi. Vì hồi ở quê em nổi tiếng là thả diều rất giỏi mà." }
            ],
            notes: [
              "N만 하게 만들다: Tạo ra kích thước bằng với danh từ. Ví dụ: '이 음악 CD만 하게 만들면 돼요' (Chỉ cần làm to bằng chiếc đĩa CD này là được).",
              "-기로 유명했다: Từng nổi tiếng vì làm việc gì đó rất cừ. Ví dụ: '제가 고향에서 연날리기 잘하기로 유명했거든요.'",
              "-(으)ㄹ걸요: Dự đoán tự tin hoặc dự liệu chắc chắn. Ví dụ: '제가 이길걸요' (Chắc em sẽ thắng thôi mà)."
            ],
            vocab: [
              { ko: "연", vi: "con diều", en: "kite" },
              { ko: "날리다", vi: "thả bay, cho bay lên", en: "to fly, make fly" },
              { ko: "연날리기", vi: "trò chơi thả diều", en: "kite flying" },
              { ko: "마름모", vi: "hình thoi", en: "rhombus, diamond shape" },
              { ko: "꼬리가 길다", vi: "đuôi dài", en: "long tail" },
              { ko: "세모", vi: "hình tam giác", en: "triangle" },
              { ko: "네모", vi: "hình vuông, hình tứ giác", en: "square, quadrangle" },
              { ko: "가운데", vi: "ở giữa, trung tâm", en: "middle, center" },
              { ko: "구멍을 내다", vi: "khoét lỗ, đục lỗ", en: "to make a hole" },
              { ko: "잘 날다", vi: "bay lượn tốt", en: "to fly well" },
              { ko: "음악 CD", vi: "đĩa CD ca nhạc", en: "music CD" },
              { ko: "동그라미", vi: "hình tròn", en: "circle" },
              { ko: "자르다", vi: "cắt bằng kéo", en: "to cut" },
              { ko: "대나무", vi: "thanh tre, cây tre", en: "bamboo stick" },
              { ko: "실을 묶다", vi: "buộc dây chỉ", en: "to tie thread" },
              { ko: "어서", vi: "mau mau, nhanh chóng", en: "promptly, quickly" },
              { ko: "이길걸요", vi: "chắc chắn sẽ thắng", en: "will probably win" }
            ],
            comprehension: [
              {
                question: "연 가운데에 동그랗게 구멍을 뚫는 이유는 무엇입니까?",
                options: [
                  "연이 바람을 타고 잘 날기 위해서",
                  "반대쪽을 내다보기 위해서",
                  "연의 무게를 가볍게 줄이기 위해서",
                  "종이 재료를 아끼기 위해서"
                ],
                correctIndex: 0,
                explanation: "Giáo viên nói: '연에 구멍을 만들어 주면 연이 잘 날거든요.'"
              },
              {
                question: "선생님은 종이에 뚫을 구멍 크기를 어떻게 하라고 했습니까?",
                options: [
                  "음악 CD 크기만 하게",
                  "사과 크기만 하게",
                  "축구공 크기만 하게",
                  "휴대폰 크기만 하게"
                ],
                correctIndex: 0,
                explanation: "Giáo viên hướng dẫn: '이 음악 CD만 하게 만들면 돼요.'"
              }
            ]
          }
        ],

        speaking: {
          title: "Nói về Cảm xúc và Một món đồ đặc biệt của bạn",
          guide: "Thực hành trả lời 3 câu hỏi dưới đây trong 1-2 phút. Hãy sử dụng mẫu so sánh 'N만 하다', biểu hiện tâm lý '마음이 편안해지다 / 신이 나다' và cấu trúc 'V-(으)ㄹ 생각도 못 하다'.",
          prompts: [
            "1. 스트레스를 받거나 마음이 복잡할 때 당신은 주로 무엇을 합니까? (Khi bị căng thẳng hoặc lòng dạ rối bời, bạn thường làm gì?)",
            "2. 악기 연주나 취미 활동을 배울 때 처음에는 어땠습니까? (Khi mới học chơi nhạc cụ hay một thú vui mới, ban đầu bạn cảm thấy thế nào?)",
            "3. 당신이 아끼는 특별한 물건의 모양과 크기는 어떻습니까? (Món đồ đặc biệt bạn yêu thích có hình dáng và kích thước ra sao?)"
          ],
          sampleAnswer: "저는 스트레스를 받거나 마음이 답답할 때 조용한 음악을 들으며 차를 마십니다. 따뜻한 차를 마시면 긴장이 풀리고 마음이 편안해지더라고요. 예전에는 바쁜 일상 때문에 취미 생활을 할 생각도 못 했는데, 최근에는 작은 화분을 하나 키우기 시작했어요. 제 손바닥만 한 동그란 화분인데, 매일 물을 주며 초록 잎을 바라보고 있으면 마음속에 여유가 생기고 기분이 아주 뿌듯해집니다."
        },

        reading: {
          title: "Đọc hiểu: Công viên sông Hàn & Nghệ thuật Jogakbo truyền thống (한강공원과 조각보)",
          passageHtml: `
            <div style="margin-bottom:24px;">
              <h3 style="color:#17523d; font-size:1.15rem; margin-bottom:10px;">1. 한강공원: 도심 속 야외 활동의 천국</h3>
              <p style="margin-bottom:12px; line-height:1.8;">
                서울 시민의 산책 장소로 <b>유명한</b> 한강공원이 <b>야외 활동의 천국</b>이라는 사실을 아는 사람은 많지 않다. 도시에서는 <b>생각도 못 했던</b> 활동들을 한강에서는 즐길 수 있다. 서울시는 이번 봄에 한강공원에서 즐길 수 있는 특별한 활동을 <b>추천하고 있다</b>.
              </p>
              <div style="background:#f8faf9; border-left:3px solid var(--primary); padding:10px 14px; border-radius:6px; font-size:0.9rem; margin-bottom:16px;">
                <b>Từ vựng nổi bật:</b> 야외 (ngoài trời), 천국 (thiên đường), 추천하다 (giới thiệu, đề xuất), 뚝섬 (Ttukseom), 인공 암벽장 (tường leo núi nhân tạo), 성수기/비수기 (mùa cao điểm/thấp điểm), 광나루 (Gwangnaru), 레일 바이크 (xe đạp đường ray), 만 6세 미만 (dưới 6 tuổi).
              </div>
            </div>

            <div style="margin-bottom:20px;">
              <h3 style="color:#17523d; font-size:1.15rem; margin-bottom:10px;">2. 조각보: 알록달록 한국의 전통 예술품</h3>
              <div style="text-align:center; margin-bottom:14px;">
                <img src="image%207.png" style="max-width:100%; max-height:260px; border-radius:10px; border:1px solid #d1d5db;" alt="조각보">
              </div>
              <p style="margin-bottom:12px; line-height:1.8;">
                조각보는 <b>주로</b> 물건을 <b>싸</b>거나 <b>선물을 포장</b>할 때 <b>썼지만</b>, 음식을 <b>덮어 두</b>거나 창문에 걸어 <b>햇빛을 가리</b>는 등 다양하게 사용되었습니다. 조각보는 물건의 모양이나 크기에 <b>관계없이</b> 쓸 수 있고 보관도 쉽다는 장점이 있습니다.
              </p>
              <p style="margin-bottom:12px; line-height:1.8;">
                천 <b>조각을 이</b>어서 예쁜 조각보를 만들었습니다. 옷을 만들고 남은 천을 사용했기 때문에 자연스럽게 <b>세모, 네모, 마름모</b> 무늬가 만들어졌습니다. 그 아름다운 색깔과 모양 때문에 조각보는 현재까지도 <b>뛰어난</b> 예술품으로 사랑받고 있습니다.
              </p>
              <div style="background:#f8faf9; border-left:3px solid var(--primary); padding:10px 14px; border-radius:6px; font-size:0.9rem;">
                <b>Từ vựng nổi bật:</b> 싸다/포장하다 (gói, bọc quà), 덮어 두다 (đậy, phủ lên), 햇빛을 가리다 (che ánh nắng), 관계없이 (bất kể, không phụ thuộc vào), 천 조각 (mảnh vải), 잇다 (nối ghép), 세모/네모/마름모 무늬 (họa tiết tam giác, vuông, thoi), 뛰어난 예술품 (tác phẩm nghệ thuật xuất sắc).
              </div>
            </div>
          `,
          questions: [
            {
              question: "한강공원에 대한 설명으로 본문의 내용과 맞는 것은 무엇입니까?",
              options: [
                "도심에서는 생각도 못 했던 다양한 야외 활동을 즐길 수 있는 천국이다.",
                "실내 운동 시설만 있어서 겨울철에만 인기가 많다.",
                "만 6세 미만의 어린이는 입장할 수 없다.",
                "조각보를 만드는 공예 교실만 열리고 있다."
              ],
              correctIndex: 0,
              explanation: "Bài đọc nêu: '한강공원이 야외 활동의 천국이라는 사실... 도시에서는 생각도 못 했던 활동들을 한강에서는 즐길 수 있다.'"
            },
            {
              question: "조각보에 대한 설명으로 알맞지 않은 것은 무엇입니까?",
              options: [
                "비싼 새 비단만을 특별히 주문해서 네모 반듯하게만 만든다.",
                "물건을 싸거나 음식을 덮어 두고, 창문에 걸어 햇빛을 가리는 데 썼다.",
                "옷을 만들고 남은 천 조각들을 이어서 세모, 네모, 마름모 무늬가 자연스럽게 생겼다.",
                "물건의 모양이나 크기에 관계없이 쓸 수 있고 보관이 쉽다."
              ],
              correctIndex: 0,
              explanation: "조각보는 옷을 만들고 남은 천 조각을 이어서 만든 알뜰한 전통 공예품이며, 새 비단만을 특별 주문한 것이 아닙니다."
            }
          ]
        },

        writing: {
          title: "Viết đoạn văn: Món đồ giúp tôi thư thái tâm hồn (나의 힐링 아이템)",
          guide: "Hãy viết 5-6 câu tiếng Hàn miêu tả về một món đồ yêu thích hoặc một nhạc cụ giúp bạn cảm thấy thư giãn, giải tỏa căng thẳng. Sử dụng cấu trúc N만 하다, 모양 묘사 형용사, và -더라고요.",
          frame: [
            "제가 마음이 답답하거나 피곤할 때 즐겨 찾는 것은 ___입니다.",
            "이 물건의 모양은 ___하고, 크기는 ___만 합니다.",
            "처음에는 이것이 도움이 될 줄은 생각도 못 했습니다.",
            "하지만 ___을/를 하고 나면 긴장이 풀리고 마음이 ___더라고요."
          ],
          sampleAnswer: "제가 마음이 답답하거나 피곤할 때 즐겨 찾는 물건은 침대 옆에 있는 작은 무드등입니다. 이 조명은 둥근 달처럼 동그랗고, 크기는 제 주먹만 합니다. 처음에는 이런 작은 소품이 얼마나 큰 도움이 될지 생각도 못 했습니다. 하지만 밤에 은은한 노란 불빛을 켜 두고 잔잔한 음악을 들으면, 하루 종일 쌓였던 긴장이 풀리고 마음이 정말 편안해지더라고요."
        }
      },

      "17": {
        id: "17",
        course: "3b",
        titleKo: "두 사람이 연인 사이라니요?",
        titleVi: "Hai người họ là người yêu của nhau cơ á?!",
        topic: "소문과 진실 (Tin đồn & Sự thật)",
        summary: "Học cách bày tỏ sự kinh ngạc hoặc bác bỏ với -다니요?, diễn tả sự nhận thức sau khi trải nghiệm -고 보니(까), cấu trúc giả vờ -(으)ㄴ/는 척하다 và hệ thống từ vựng về tin đồn, quan hệ tình cảm.",

        grammar: [
          {
            id: "g1",
            title: "A/V-다니요?, N(이)라니요?",
            meaning: "Làm gì có chuyện... cơ chứ?! / Nói gì mà... cơ chứ?!",
            explanation: "Dùng để biểu thị sự ngạc nhiên tột độ, khó tin hoặc phản bác/phủ nhận lại một thông tin, lời nói mà người đối thoại vừa đề cập đến.",
            conjugation: [
              { type: "Động từ", rule: "Thì hiện tại: V + -ㄴ/는다니요?, Quá khứ: -았/었다니요?", example: "가다 → 간다니요?, 먹다 → 먹는다니요?, 떠났다 → 떠났다니요?" },
              { type: "Tính từ", rule: "A + -다니요?, Quá khứ: -았/었다니요?", example: "바쁘다 → 바쁘다니요?, 예쁘다 → 예쁘다니요?" },
              { type: "Danh từ", rule: "Patchim + -이라니요? / Không patchim + -라니요?", example: "연인 → 연인이라니요?, 거짓말 → 거짓말이라니요?" }
            ],
            notes: "Cấu trúc này mang sắc thái cảm xúc rất mạnh (kinh ngạc hoặc không đồng tình), chỉ nên dùng với bạn bè, đồng nghiệp thân thiết hoặc người bằng vai phải lứa.",
            examples: [
              { ko: "A: 민호 씨와 지수 씨가 사귄대요. — B: 두 사람이 연인 사이라니요? 말도 안 돼요!", vi: "A: Nghe nói Minho và Jisu đang hẹn hò đấy. — B: Hai người họ là người yêu của nhau cơ á?! Vô lý hết sức!" },
              { ko: "벌써 방학이 다 끝났다니요? 시간이 너무 빠르네요.", vi: "Làm gì có chuyện kỳ nghỉ đã hết veo rồi cơ chứ?! Thời gian trôi nhanh quá chừng." },
              { ko: "제가 거짓말을 했다니요? 저는 분명히 사실대로 말했어요.", vi: "Nói gì mà bảo tôi nói dối cơ chứ?! Tôi rõ ràng đã nói đúng sự thật mà." }
            ],
            quickQuiz: {
              question: "A: '영수 씨가 회사를 그만둔대요.' — B: '영수 씨가 회사를 (그만두다) _____? 지난주에 승진했잖아요!'",
              questionVi: "A: 'Nghe nói Youngsoo sắp nghỉ việc đấy.' — B: 'Youngsoo nghỉ việc cơ á?! Tuần trước anh ấy vừa được thăng chức mà!'",
              options: ["그만둔다니요", "그만두고 보니까", "그만두는 척해요", "그만두려면"],
              correctIndex: 0,
              explanation: "Thể hiện sự bất ngờ và khó tin trước tin Youngsoo nghỉ việc, dùng '그만둔다니요?'."
            }
          },
          {
            id: "g2",
            title: "V-고 보니(까)",
            meaning: "Sau khi (làm gì) rồi mới nhận ra / mới thấy là...",
            explanation: "Diễn tả sau khi người nói đã hoàn thành một hành động hoặc đích thân trải nghiệm một sự việc nào đó thì mới phát hiện ra một sự thật bất ngờ hoặc có sự thay đổi trong nhận thức/cảm xúc.",
            conjugation: [
              { type: "Động từ (không phân biệt patchim)", rule: "+ -고 보니(까)", example: "듣다 → 듣고 보니, 사고 나다 → 사고 보니, 알고 지내다 → 알고 보니" },
              { type: "Biểu hiện quán dụng rất phổ biến", rule: "알고 보니(까) = Hóa ra là..., 듣고 보니(까) = Nghe xong mới thấy..." }
            ],
            notes: "Vế sau thường là một sự thật bất ngờ nằm ngoài dự đoán ban đầu của người nói.",
            examples: [
              { ko: "옷이 예뻐서 샀는데 집에 와서 입고 보니까 사이즈가 너무 작더라고요.", vi: "Thấy áo đẹp nên mua nhưng về nhà mặc thử vào rồi mới thấy kích cỡ bị chật quá." },
              { ko: "처음에는 이상하다고 생각했는데 이야기를 다 듣고 보니까 그럴 수도 있겠네요.", vi: "Ban đầu tôi cứ nghĩ là kỳ lạ, nhưng nghe xong toàn bộ câu chuyện rồi mới thấy hóa ra cũng có lý." },
              { ko: "두 사람이 무척 닮아서 알고 보니 쌍둥이 형제였어요.", vi: "Hai người họ giống nhau đến ngỡ ngàng, hóa ra tìm hiểu ra mới biết là anh em sinh đôi." }
            ],
            quickQuiz: {
              question: "친구의 사연을 자세히 (듣다) _____ 제 오해였다는 것을 깨달았어요.",
              questionVi: "Lắng nghe cặn kẽ tâm sự của bạn rồi tôi mới nhận ra đó là sự hiểu lầm của chính mình.",
              options: ["듣고 보니까", "듣다니요", "듣는 척하면서", "들으려면"],
              correctIndex: 0,
              explanation: "Sau khi nghe xong mới vỡ lẽ ra sự thật, dùng '듣고 보니까'."
            }
          },
          {
            id: "g3",
            title: "A/V-(으)ㄴ/는 척하다 (체하다)",
            meaning: "Giả vờ như... / Làm bộ như...",
            explanation: "Diễn tả hành động làm ra vẻ như một trạng thái hoặc hành động nào đó đang diễn ra, dù trên thực tế hoàn toàn không phải như vậy. Thường dùng trong các tình huống ứng xử tế nhị hoặc né tránh.",
            conjugation: [
              { type: "Động từ thì hiện tại", rule: "V + -는 척하다", example: "보다 → 보는 척하다, 자다 → 자는 척하다, 알다 → 아는 척하다" },
              { type: "Động từ thì quá khứ", rule: "V + -(으)ㄴ 척하다", example: "먹다 → 먹은 척하다, 듣다 → 들은 척하다" },
              { type: "Tính từ", rule: "A + -(으)ㄴ 척하다", example: "예쁘다 → 예쁜 척하다, 바쁘다 → 바쁜 척하다" },
              { type: "Danh từ", rule: "N + 인 척하다", example: "부자 → 부자인 척하다, 학생 → 학생인 척하다" }
            ],
            notes: "Cụm '모르는 척하다' (giả vờ không biết / làm ngơ) và '못 본 척하다' (làm như không nhìn thấy) được người Hàn dùng rất nhiều trong đời sống.",
            examples: [
              { ko: "길에서 옛 연인을 마주쳤지만 모르는 척하고 그냥 지나쳤어요.", vi: "Tình cờ chạm mặt người yêu cũ trên phố nhưng tôi vờ như không quen biết mà cứ thế bước qua." },
              { ko: "민수 씨는 바쁘지 않으면서 귀찮은 일을 피하려고 바쁜 척해요.", vi: "Minsoo chẳng hề bận rộn gì nhưng lại vờ làm bộ bận để trốn tránh việc phiền toái." },
              { ko: "그 소문을 이미 알고 있었지만 친구의 입장을 생각해서 못 들은 척했어요.", vi: "Dù đã biết tin đồn đó từ trước nhưng nghĩ cho thể diện của bạn nên tôi làm như chưa từng nghe thấy." }
            ],
            quickQuiz: {
              question: "동생은 엄마가 방에 들어오시자 공부를 (하다) _____ 책을 펼쳤어요.",
              questionVi: "Thấy mẹ bước vào phòng, đứa em vờ như đang học bài liền mở vội cuốn sách ra.",
              options: ["하는 척하며", "하다니요", "하고 보니까", "하려면"],
              correctIndex: 0,
              explanation: "Hành động giả vờ đang học bài khi mẹ vào phòng: '공부를 하는 척하며'."
            }
          }
        ],

        vocabulary: [
          {
            category: "Tin đồn & Lan truyền thông tin (소문과 전파)",
            words: [
              {
                ko: "소문이 나다",
                hanja: "所聞이 나다",
                en: "rumors arise / word gets around",
                vi: "có tin đồn rộ lên, lan truyền tin đồn",
                image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=400&q=80",
                examples: [
                  { ko: "회사 안에 두 사람이 곧 결혼한다는 소문이 파다하게 났어요.", vi: "Trong công ty rộ lên tin đồn râm ran rằng hai người họ sắp sửa kết hôn." },
                  { ko: "그 식당은 음식이 맛있다고 입소문이 나서 손님이 줄을 서요.", vi: "Quán ăn đó được đồn đại truyền miệng là đồ ăn rất ngon nên khách đứng xếp hàng dài." }
                ]
              },
              {
                ko: "소문이 퍼지다",
                hanja: "所聞이 퍼지다",
                en: "rumor spreads around",
                vi: "tin đồn lan nhanh, lan rộng ra xung quanh",
                examples: [
                  { ko: "SNS를 통해 확인되지 않은 헛소문이 순식간에 전국으로 퍼졌어요.", vi: "Thông qua mạng xã hội, tin đồn thất thiệt chưa kiểm chứng đã lan rộng khắp cả nước chỉ trong chớp mắt." },
                  { ko: "비밀이라고 말했지만 어느새 동네 사람들에게 소문이 다 퍼졌더라고요.", vi: "Dù đã dặn là chuyện bí mật nhưng chẳng mấy chốc tin đồn đã lan ra khắp xóm rồi." }
                ]
              },
              {
                ko: "소문을 내다",
                hanja: "所聞을 내다",
                en: "to start a rumor / spread the word",
                vi: "tung tin đồn, phát tán tin tức",
                examples: [
                  { ko: "아직 확정되지 않은 사실을 함부로 소문내고 다니면 안 돼요.", vi: "Sự thật chưa ngã ngũ thì chớ có đi rêu rao tung tin đồn lung tung." },
                  { ko: "좋은 이벤트 소식을 친구들에게 널리 소문을 내서 같이 참여했어요.", vi: "Tôi đã loan tin sự kiện hấp dẫn cho bạn bè biết để cùng nhau tham gia." }
                ]
              },
              {
                ko: "소문을 퍼뜨리다",
                hanja: "所聞을 퍼뜨리다",
                en: "to spread / circulate a rumor widely",
                vi: "lan truyền tin đồn, phát tán tin tức rộng rãi",
                examples: [
                  { ko: "근거 없는 거짓 소문을 악의적으로 퍼뜨리면 법적인 처벌을 받을 수 있어요.", vi: "Nếu ác ý phát tán những tin đồn dối trá vô căn cứ thì có thể bị xử lý theo pháp luật." },
                  { ko: "누가 그런 엉뚱한 소문을 퍼뜨렸는지 도무지 알 수가 없네요.", vi: "Chẳng thể nào biết nổi ai đã đi lan truyền cái tin đồn vô lý quái đản như thế nữa." }
                ]
              },
              {
                ko: "믿어지지 않다",
                hanja: "",
                en: "to be unbelievable / hard to believe",
                vi: "không thể tin được, khó mà tin nổi",
                examples: [
                  { ko: "두 사람이 그렇게 다정했는데 헤어졌다니 정말 믿어지지 않아요.", vi: "Hai người họ từng tình tứ mặn nồng đến thế mà lại chia tay, thật khó mà tin nổi." },
                  { ko: "내가 꿈꾸던 대학에 최종 합격했다는 소식이 아직도 믿어지지 않아요.", vi: "Tin tức tôi đã chính thức trúng tuyển vào trường đại học mơ ước đến giờ tôi vẫn chưa dám tin." }
                ]
              },
              {
                ko: "소문이 사실이다",
                hanja: "所聞이 事實이다",
                en: "the rumor turns out to be true",
                vi: "tin đồn là sự thật",
                examples: [
                  { ko: "소문이 사실인지 아닌지 확인하기 전까지는 섣불리 판단하지 마세요.", vi: "Trước khi xác minh tin đồn có phải là sự thật hay không thì đừng vội vàng phán xét." },
                  { ko: "동네에 돌던 재개발 소문이 결국 사실로 밝혀져 주민들이 기뻐했어요.", vi: "Tin đồn quy hoạch râm ran trong khu phố cuối cùng đã là sự thật khiến người dân mừng rỡ." }
                ]
              },
              {
                ko: "헛소문",
                hanja: "",
                en: "groundless rumor / false gossip",
                vi: "tin đồn thất thiệt, tin vịt, lời đồn vô căn cứ",
                examples: [
                  { ko: "그 연예인의 열애설은 사실이 아닌 단순한 헛소문으로 밝혀졌어요.", vi: "Tin đồn hẹn hò của ngôi sao đó đã được làm sáng tỏ chỉ là tin đồn thất thiệt vô căn cứ." },
                  { ko: "출처가 불분명한 헛소문에 쉽게 흔들리거나 속지 마세요.", vi: "Đừng vội dao động hay mắc lừa trước những tin đồn nhảm không rõ nguồn gốc." }
                ]
              },
              {
                ko: "발 없는 말이 천 리를 간다",
                hanja: "",
                en: "words have no feet yet travel a thousand miles (gossip travels fast)",
                vi: "lời nói không chân đi ngàn dặm (tiếng lành đồn xa tiếng dữ đồn xa)",
                examples: [
                  { ko: "'발 없는 말이 천 리를 간다'고 하니 말 한마디도 항상 조심해야 해요.", vi: "Các cụ bảo 'Lời nói không chân đi ngàn dặm', nên từng câu ăn tiếng nói lúc nào cũng phải cẩn trọng." },
                  { ko: "가볍게 건넨 농담이 와전되어 퍼지는 걸 보고 속담의 뜻을 실감했어요.", vi: "Nhìn câu đùa bâng quơ bị thêu dệt tam sao thất bản, tôi mới thấm thía câu tục ngữ trên." }
                ]
              }
            ]
          },
          {
            category: "Mối quan hệ & Sự thật (관계 & 진실)",
            words: [
              {
                ko: "연인 사이",
                hanja: "戀人 사이",
                en: "romantic couple / lovers",
                vi: "mối quan hệ người yêu, cặp đôi",
                image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
                examples: [
                  { ko: "두 사람은 오랜 친구 사이에서 최근에 연인 사이로 발전했어요.", vi: "Hai người họ từ tình bạn lâu năm dạo gần đây đã tiến triển thành người yêu của nhau." },
                  { ko: "연인 사이에는 서로를 향한 신뢰와 배려가 가장 바탕이 되어야 해요.", vi: "Trong mối quan hệ tình cảm, sự tin tưởng và thấu hiểu lẫn nhau phải là nền tảng cốt lõi." }
                ]
              },
              {
                ko: "열애설",
                hanja: "熱愛說",
                en: "dating rumor (of celebrities)",
                vi: "tin đồn hẹn hò, tin đồn tình cảm (của người nổi tiếng)",
                examples: [
                  { ko: "유명 배우와 아이돌 가수의 열애설이 아침 뉴스 1위를 차지했어요.", vi: "Tin đồn hẹn hò giữa nam diễn viên nổi tiếng và nữ ca sĩ thần tượng đứng đầu bảng tin sáng nay." },
                  { ko: "소속사에서는 열애설에 대해 사실무근이라고 공식 입장을 발표했어요.", vi: "Công ty quản lý đã ra thông cáo chính thức khẳng định tin đồn hẹn hò là hoàn toàn vô căn cứ." }
                ]
              },
              {
                ko: "우연히",
                hanja: "偶然히",
                en: "by chance / accidentally / coincidentally",
                vi: "tình cờ, ngẫu nhiên",
                examples: [
                  { ko: "주말에 서점에 들렀다가 중학교 때 동창을 우연히 마주쳤어요.", vi: "Cuối tuần ghé hiệu sách, tôi tình cờ chạm mặt một người bạn học cùng hồi cấp hai." },
                  { ko: "카페에서 커피를 마시다가 우연히 옆 테이블의 대화를 듣게 되었어요.", vi: "Đang ngồi uống cà phê thì tôi vô tình nghe được câu chuyện của bàn bên cạnh." }
                ]
              },
              {
                ko: "자세히",
                hanja: "仔細히",
                en: "in detail / closely / thoroughly",
                vi: "tỉ mỉ, cặn kẽ, chi tiết",
                examples: [
                  { ko: "서류에 적힌 주의 사항을 자세히 읽어 보신 후에 서명해 주세요.", vi: "Xin vui lòng đọc kỹ lưỡng các điều khoản lưu ý trên văn bản rồi hẵng ký tên." },
                  { ko: "사건의 전말을 자세히 들여다보니 당사자 간의 오해가 깊었더라고요.", vi: "Khi nhìn nhận cặn kẽ đầu đuôi sự việc thì thấy hiểu lầm giữa đôi bên đã quá sâu sắc." }
                ]
              },
              {
                ko: "솔직히",
                hanja: "率直히",
                en: "honestly / frankly",
                vi: "thành thật mà nói, thẳng thắn",
                examples: [
                  { ko: "솔직히 말씀드리면 처음에는 그 소문을 믿지 않았어요.", vi: "Thành thật mà nói thì lúc đầu tôi chẳng hề tin vào lời đồn đại đó." },
                  { ko: "자신의 잘못을 솔직히 인정하고 사과하는 용기가 필요해요.", vi: "Cần phải có dũng khí để thẳng thắn thừa nhận lỗi lầm và nói lời xin lỗi." }
                ]
              },
              {
                ko: "분명히",
                hanja: "分明히",
                en: "clearly / definitely / undoubtedly",
                vi: "rõ ràng, chắc chắn là",
                examples: [
                  { ko: "제가 어제 두 사람이 다정하게 손을 잡고 걷는 모습을 분명히 봤어요.", vi: "Hôm qua chính mắt tôi đã nhìn thấy rõ ràng hai người họ nắm tay nhau tình tứ đi dạo." },
                  { ko: "이번 프로젝트는 우리 팀원들이 분명히 성공시킬 수 있을 거예요.", vi: "Dự án lần này các thành viên trong đội của chúng ta chắc chắn sẽ hoàn thành thắng lợi." }
                ]
              },
              {
                ko: "그럴 리가 없다",
                hanja: "",
                en: "there's no way / that cannot be true",
                vi: "làm gì có chuyện đó, không đời nào như thế",
                examples: [
                  { ko: "평소에 성실하기로 소문난 영수 씨가 거짓말을 했을 리가 없어요.", vi: "Người vốn nổi tiếng chăm chỉ thành thật như anh Youngsoo thì không đời nào lại nói dối." },
                  { ko: "A: 저 두 사람 싸웠대요. — B: 방금 전까지 웃고 있었는데 그럴 리가 없어요.", vi: "A: Nghe nói hai người đó cãi nhau đấy. — B: Vừa nãy họ còn cười nói mà, làm gì có chuyện đó!" }
                ]
              },
              {
                ko: "오해를 풀다",
                hanja: "誤解를 풀다",
                en: "to clear up a misunderstanding",
                vi: "hóa giải hiểu lầm, giải tỏa khúc mắc",
                examples: [
                  { ko: "서로 솔직한 대화를 나눈 끝에 마침내 오해를 풀고 화해했어요.", vi: "Sau khi thẳng thắn trò chuyện chân thành, cuối cùng chúng tôi đã gỡ bỏ được hiểu lầm và làm lành." },
                  { ko: "작은 오해를 제때 풀지 않으면 나중에 큰 갈등으로 번질 수 있어요.", vi: "Hiểu lầm nhỏ nếu không kịp thời hóa giải thì về sau rất dễ bùng phát thành mâu thuẫn lớn." }
                ]
              },
              {
                ko: "해명하다",
                hanja: "解明하다",
                en: "to clarify / explain / debunk",
                vi: "thanh minh, giải trình sự thật",
                examples: [
                  { ko: "인터넷에 퍼진 악성 루머에 대해 회사가 공식 자료를 내고 해명했어요.", vi: "Công ty đã phát hành tài liệu chính thức để thanh minh về những tin đồn ác ý lan tràn trên mạng." },
                  { ko: "억울한 누명을 벗기 위해 직접 기자회견을 열고 사실관계를 해명했어요.", vi: "Để rũ bỏ nỗi oan ức, anh ấy đã đích thân mở họp báo làm sáng tỏ mọi ngọn ngành sự việc." }
                ]
              },
              {
                ko: "당황하다",
                hanja: "唐惶하다",
                en: "to be flustered / perplexed / taken aback",
                vi: "bối rối, ngỡ ngàng, hoang mang",
                examples: [
                  { ko: "자신에 대한 엉뚱한 열애설 기사를 보고 무척 당황했어요.", vi: "Nhìn thấy bài báo tin đồn hẹn hò vô căn cứ về mình, tôi thấy vô cùng bối rối." },
                  { ko: "예상치 못한 질문을 받았을 때 당황하지 않고 침착하게 대답했어요.", vi: "Khi nhận được câu hỏi ngoài dự kiến, tôi không hề lúng túng mà bình tĩnh trả lời." }
                ]
              },
              {
                ko: "부인하다",
                hanja: "否認하다",
                en: "to deny / disclaim",
                vi: "phủ nhận, chối bỏ",
                examples: [
                  { ko: "그 연예인은 인터뷰에서 열애설에 대해 사실무근이라며 강력히 부인했어요.", vi: "Trong bài phỏng vấn, ngôi sao đó kịch liệt phủ nhận tin đồn hẹn hò và khẳng định hoàn toàn vô căn cứ." },
                  { ko: "자신의 잘못을 무조건 부인하기보다는 솔직하게 반성해야 해요.", vi: "Thay vì khăng khăng phủ nhận lỗi lầm của mình, bạn nên thành khẩn kiểm điểm bản thân." }
                ]
              },
              {
                ko: "인정하다",
                hanja: "認定하다",
                en: "to admit / acknowledge",
                vi: "thừa nhận, công nhận",
                examples: [
                  { ko: "두 사람은 오랜 열애설 끝에 공식적으로 연인 관계임을 인정했어요.", vi: "Sau thời gian dài dính tin đồn hẹn hò, hai người họ đã chính thức thừa nhận mối quan hệ yêu đương." },
                  { ko: "자신의 부족함을 겸허히 인정하고 남의 조언을 귀담아들으세요.", vi: "Hãy khiêm tốn thừa nhận sự thiếu sót của bản thân và lắng nghe lời khuyên của người khác." }
                ]
              }
            ]
          }
        ],

        dialogues: [
          {
            title: "대화 1 · Minho và Jisu xôn xao về tin đồn hẹn hò",
            audioText: "지수 씨, 회사 로비에서 영수 씨와 유나 씨가 다정하게 커피를 마시는 모습을 봤어요? 네, 저도 봤어요. 두 사람이 연인 사이라는 소문이 사내에 쫙 퍼졌더라고요. 두 사람이 연인 사이라니요? 그냥 친한 입사 동기일 뿐인데요! 그럴 리가 없다고 생각했는데, 주말에도 둘이 영화관에 함께 있는 걸 본 사람이 있대요. 그래요? 듣고 보니 요즘 두 사람이 부쩍 가까워진 것 같기는 하네요.",
            lines: [
              { speaker: "민호", ko: "지수 씨, 회사 로비에서 영수 씨와 유나 씨가 다정하게 커피를 마시는 모습을 봤어요?", vi: "Jisu ơi, bạn có thấy cảnh anh Youngsoo và chị Yuna ngồi uống cà phê tình tứ ở sảnh công ty không?" },
              { speaker: "지수", ko: "네, 저도 봤어요. 두 사람이 연인 사이라는 소문이 사내에 쫙 퍼졌더라고요.", vi: "Có chứ, tôi cũng thấy. Trong công ty đang lan truyền rầm rộ tin đồn hai người họ là một cặp đấy." },
              { speaker: "민호", ko: "두 사람이 연인 사이라니요? 그냥 친한 입사 동기일 뿐인데요!", vi: "Hai người họ là người yêu của nhau cơ á?! Họ chỉ là bạn đồng nghiệp cùng đợt vào công ty thôi mà!" },
              { speaker: "지수", ko: "저도 처음엔 그럴 리가 없다고 생각했는데, 주말에도 둘이 영화관에 함께 있는 걸 본 사람이 있대요.", vi: "Lúc đầu tôi cũng nghĩ không đời nào như thế, nhưng nghe bảo có người tận mắt thấy cuối tuần hai người đi xem phim cùng nhau nữa cơ." },
              { speaker: "민호", ko: "그래요? 듣고 보니 요즘 두 사람이 부쩍 가까워진 것 같기는 하네요.", vi: "Thế à? Nghe bạn nói thế rồi ngẫm lại mới thấy dạo này hai người họ thân thiết hơn hẳn thật đấy." }
            ],
            comprehension: [
              {
                question: "사내에 퍼진 소문의 내용은 무엇입니까?",
                options: [
                  "영수 씨와 유나 씨가 함께 회사를 그만둔다는 소문",
                  "영수 씨와 유나 씨가 연인 사이라는 소문",
                  "두 사람이 크게 다투고 절교했다는 소문",
                  "두 사람이 해외 지사로 발령받았다는 소문"
                ],
                correctIndex: 1,
                explanation: "Hội thoại nêu: '두 사람이 연인 사이라는 소문이 사내에 쫙 퍼졌더라고요.'"
              },
              {
                question: "민호 씨의 반응 변화로 알맞은 것은?",
                options: [
                  "처음부터 소문을 굳게 믿었다.",
                  "처음에는 믿기 어려워하다가, 지수 씨의 말을 듣고 보니 그럴 수도 있겠다고 생각했다.",
                  "지수 씨에게 화를 내며 자리를 떴다.",
                  "소문을 퍼뜨린 사람을 찾아내겠다고 했다."
                ],
                correctIndex: 1,
                explanation: "Ban đầu Minho thốt lên: '두 사람이 연인 사이라니요?', nhưng sau đó nói: '듣고 보니 요즘 두 사람이 부쩍 가까워진 것 같기는 하네요.'"
              }
            ]
          },
          {
            title: "대화 2 · Nói về tin đồn trên mạng xã hội và sự thấu hiểu",
            audioText: "마이클 씨, 어제 인터넷에 올라온 그 기사 봤어요? 유명 셰프 식당에 문제가 있다는 글이요. 아, 그거요? 저도 처음엔 깜짝 놀랐는데 알고 보니까 악의적으로 지어낸 헛소문이더라고요. 역시 사실을 자세히 확인하지 않고 소문만 믿으면 안 되겠어요. 맞아요. '발 없는 말이 천 리를 간다'고 하잖아요. 당사자가 억울하지 않도록 오해가 빨리 풀렸으면 좋겠어요.",
            lines: [
              { speaker: "유나", ko: "마이클 씨, 어제 인터넷에 올라온 그 기사 봤어요? 유명 셰프 식당에 문제가 있다는 글이요.", vi: "Michael ơi, bạn có đọc bài viết đăng trên mạng hôm qua không? Bài tố quán ăn của đầu bếp nổi tiếng có vấn đề ấy." },
              { speaker: "마이클", ko: "아, 그거요? 저도 처음엔 깜짝 놀랐는데 알고 보니까 악의적으로 지어낸 헛소문이더라고요.", vi: "À, vụ đó hả? Mới đầu tôi cũng giật mình sửng sốt, nhưng tìm hiểu ra mới biết đó là tin đồn nhảm do ai đó ác ý bịa đặt." },
              { speaker: "유나", ko: "역시 사실을 자세히 확인하지 않고 소문만 믿으면 안 되겠어요.", vi: "Quả nhiên là không thể cứ thế tin ngay vào lời đồn khi chưa kiểm chứng sự thật cặn kẽ." },
              { speaker: "마이클", ko: "맞아요. '발 없는 말이 천 리를 간다'고 하잖아요. 당사자가 억울하지 않도록 오해가 빨리 풀렸으면 좋겠어요.", vi: "Đúng thế. Người xưa bảo 'Lời nói không chân đi ngàn dặm' mà. Mong sao khúc mắc sớm được hóa giải để người trong cuộc đỡ chịu nỗi oan ức." }
            ],
            comprehension: [
              {
                question: "인터넷에 올라온 식당 관련 글의 진실은 무엇이었습니까?",
                options: [
                  "식당 주인이 직접 올린 홍보 글이었다.",
                  "악의적으로 지어낸 헛소문이었다.",
                  "정부 기관에서 공식 발표한 내용이었다.",
                  "신문사 기자가 취재하여 밝혀낸 사실이었다."
                ],
                correctIndex: 1,
                explanation: "Michael nói: '알고 보니까 악의적으로 지어낸 헛소문이더라고요.'"
              }
            ]
          }
        ],

        speaking: {
          title: "Nói về Tin đồn hoặc Một sự hiểu lầm bạn từng trải qua",
          guide: "Thực hành trả lời 3 câu hỏi dưới đây trong 1-2 phút. Hãy sử dụng mẫu ngạc nhiên '-다니요?', cấu trúc nhận thức 'V-고 보니(까)' và biểu hiện '오해를 풀다'.",
          prompts: [
            "1. 자신에 대한 엉뚱한 소문이나 오해를 받아 본 경험이 있습니까? (Bạn đã bao giờ gặp phải tin đồn vô lý hoặc bị hiểu lầm về mình chưa?)",
            "2. 그 소문을 처음 들었을 때 어떤 기분이 들었습니까? (Khi lần đầu nghe thấy tin đồn đó, bạn cảm thấy thế nào?)",
            "3. 그 오해를 풀기 위해 어떻게 행동했습니까? (Bạn đã làm gì để hóa giải sự hiểu lầm đó?)"
          ],
          sampleAnswer: "대학교 때 제가 휴학하고 유학을 떠난다는 엉뚱한 소문이 과에 퍼진 적이 있었습니다. 동기들이 제게 언제 출국하느냐고 물었을 때, 제가 유학을 간다니요? 정말 황당하고 어이가 없었습니다. 알고 보니까 제가 방학 동안 어학원에 다니며 시험공부를 했던 것을 누군가 오해하고 소문을 낸 것이더라고요. 그래서 저는 친구들에게 솔직하게 사정을 설명하고 오해를 바로잡았습니다. 소문이 퍼지는 속도가 무척 빠르다는 것을 실감한 경험이었습니다."
        },

        reading: {
          title: "Đọc hiểu: Tác hại của tin đồn trên mạng xã hội (SNS 시대의 소문과 진실)",
          passage: "현대 사회는 스마트폰과 소셜 미디어(SNS)의 발달로 정보가 빛의 속도로 전파되는 시대를 살고 있습니다. 하지만 정보의 전달이 편리해진 만큼, 사실이 확인되지 않은 가짜 뉴스나 악성 루머 역시 걷잡을 수 없이 퍼져 나가는 부작용을 낳고 있습니다. 옛 속담에 '발 없는 말이 천 리를 간다'고 했지만, 오늘날의 디지털 소문은 단 몇 초 만에 전 세계로 퍼져 나갑니다.\n\n문제는 많은 사람들이 소문의 진위 여부를 자세히 확인하지 않고 자극적인 내용만을 믿어 버린다는 점입니다. 심지어 사실이 아니라는 해명 글이 올라와도, 이미 퍼진 소문을 진실이라고 믿으며 당사자에게 비난의 화살을 돌리기도 합니다. 억울한 피해자가 생기지 않도록 하려면, 확인되지 않은 소문을 무분별하게 퍼뜨리지 않고 비판적인 시각으로 정보를 선별하는 성숙한 시민 의식이 절실히 요구됩니다.",
          questions: [
            {
              question: "본문에서 지적한 SNS 시대 소문의 가장 큰 문제점은 무엇입니까?",
              options: [
                "소문이 너무 느리게 퍼져서 사람들이 답답해한다.",
                "사실 확인을 거치지 않은 가짜 뉴스나 악성 루머가 순식간에 퍼져 무고한 피해자를 낳는다.",
                "인터넷 요금이 너무 비싸서 소문을 읽지 못한다.",
                "젊은 층이 소셜 미디어를 사용하지 않는다."
              ],
              correctIndex: 1,
              explanation: "Bài đọc nêu: '사실이 확인되지 않은 가짜 뉴스나 악성 루머 역시 걷잡을 수 없이 퍼져 나가는 부작용을 낳고 있습니다.'"
            },
            {
              question: "소문으로 인한 피해를 줄이기 위해 글쓴이가 강조한 태도는 무엇입니까?",
              options: [
                "모든 인터넷 뉴스를 아예 읽지 않는다.",
                "확인되지 않은 소문을 함부로 퍼뜨리지 않고 비판적으로 정보를 선별한다.",
                "소문이 나면 무조건 경찰에 신고한다.",
                "친구들과만 비밀 이야기를 나눈다."
              ],
              correctIndex: 1,
              explanation: "Đoạn kết nhấn mạnh: '확인되지 않은 소문을 무분별하게 퍼뜨리지 않고 비판적인 시각으로 정보를 선별하는 성숙한 시민 의식이 절실히 요구됩니다.'"
            }
          ]
        },

        writing: {
          title: "Viết đoạn văn: Thái độ đúng đắn trước những lời đồn (소문에 대처하는 우리의 자세)",
          guide: "Hãy viết 5-6 câu tiếng Hàn nêu quan điểm của bạn về tin đồn trong cuộc sống. Sử dụng cấu trúc -다니요, V-고 보니, và thành ngữ 발 없는 말이 천 리를 간다.",
          frame: [
            "우리는 일상생활에서 종종 다양한 소문을 듣게 됩니다.",
            "옛 속담처럼 '발 없는 말이 천 리를 간다'고 하듯이 ___.",
            "하지만 겉으로 보이는 것만 믿고 ___다니요? 그것은 매우 위험합니다.",
            "어떤 이야기를 자세히 듣고 보니까 ___ 경우가 많기 때문입니다.",
            "따라서 우리는 사실을 직접 확인하기 전에는 함부로 소문을 내지 말아야 합니다."
          ],
          sampleAnswer: "우리는 일상생활에서 종종 사람들에 대한 다양한 소문을 듣게 됩니다. 옛 속담에 '발 없는 말이 천 리를 간다'고 하듯이 소문은 눈 깜짝할 사이에 멀리 퍼져 나갑니다. 하지만 정확한 사실 확인도 없이 소문만 듣고 사람을 판단하다니요? 그것은 당사자에게 큰 상처를 주는 위험한 행동입니다. 겉보기에는 이상해 보여도 당사자의 사정을 자세히 듣고 보니까 큰 오해였던 경우가 많기 때문입니다. 따라서 우리는 확인되지 않은 이야기를 함부로 옮기지 않는 지혜를 가져야 합니다."
        }
      }
    }
  },

  "3a": {
    name: "Seoul Korean 3A",
    description: "Giáo trình Tiếng Hàn Seoul Trung cấp 3A (Đang cập nhật các bài tiếp theo)",
    lessons: {}
  }
};
