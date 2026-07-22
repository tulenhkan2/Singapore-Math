import { mathData } from '../data/index.js';

const gradeSelect = document.getElementById('gradeSelect');
const topicSelect = document.getElementById('topicSelect');
const exerciseList = document.getElementById('exerciseList');

// 1. Lắng nghe khi chọn Khối Lớp
gradeSelect.addEventListener('change', (e) => {
  const selectedGrade = e.target.value;
  
  // Reset lại dropdown Dạng toán và danh sách bài
  topicSelect.innerHTML = '<option value="">-- Chọn Dạng Toán --</option>';
  exerciseList.innerHTML = '';

  if (selectedGrade && mathData[selectedGrade]) {
    topicSelect.disabled = false;
    const topics = mathData[selectedGrade].topics;

    // Đổ danh sách các dạng toán vào dropdown
    topics.forEach((topic, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = topic.name;
      topicSelect.appendChild(option);
    });
  } else {
    topicSelect.disabled = true;
  }
});
// Lắng nghe sự kiện chọn Dạng Toán
topicSelect.addEventListener('change', (e) => {
  const selectedGrade = gradeSelect.value;
  const topicIndex = e.target.value;

  exerciseList.innerHTML = '';

  if (topicIndex !== '' && mathData[selectedGrade]) {
    const selectedTopic = mathData[selectedGrade].topics[topicIndex];

    // Tiêu đề dạng toán
    const topicHeading = document.createElement('h2');
    topicHeading.className = 'topic-title';
    topicHeading.textContent = selectedTopic.name;
    exerciseList.appendChild(topicHeading);

    // Duyệt qua từng câu hỏi trong topic
    selectedTopic.questions.forEach((q) => {
      const card = document.createElement('div');
      card.className = 'exercise-card';

      card.innerHTML = `
        <div class="question-text">${q.content}</div>
        <button class="btn-toggle-answer">Show Answer</button>
        <div class="answer-box">
          <strong>Answer:</strong> ${q.answer}
        </div>
      `;

      // Gắn sự kiện click Ẩn/Hiện đáp án cho nút bấm
      const toggleBtn = card.querySelector('.btn-toggle-answer');
      const answerBox = card.querySelector('.answer-box');

      toggleBtn.addEventListener('click', () => {
        const isShown = answerBox.classList.toggle('show');
        toggleBtn.textContent = isShown ? 'Hide Answer' : 'Show Answer';
      });

      exerciseList.appendChild(card);
    });
  }
});
});
