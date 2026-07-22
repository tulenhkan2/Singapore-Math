import { mathData } from '../data/index.js';

const gradeSelect = document.getElementById('gradeSelect');
const topicSelect = document.getElementById('topicSelect');
const exerciseList = document.getElementById('exerciseList');

// 1. Lắng nghe khi chọn Khối Lớp
gradeSelect.addEventListener('change', (e) => {
  const selectedGrade = e.target.value;

  topicSelect.innerHTML = '<option value="">-- Chọn Dạng Toán --</option>';
  exerciseList.innerHTML = '';

  if (selectedGrade && mathData[selectedGrade]) {
    topicSelect.disabled = false;
    const topics = mathData[selectedGrade].topics;

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

// 2. Lắng nghe khi chọn Dạng Toán
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

    // Render từng bài tập
    selectedTopic.questions.forEach((q) => {
      const card = document.createElement('div');
      card.className = 'exercise-card';

card.innerHTML = `
  <div class="question-text">${q.content}</div>
  <button class="btn-toggle-answer">Show Answer & Solution</button>
  <div class="answer-box">
    ${q.solution ? `<div style="margin-bottom:8px; white-space:pre-line;"><strong>Worked Solution:</strong><br>${q.solution}</div>` : ''}
    <div style="color:#137333;"><strong>Final Answer:</strong> ${q.answer}</div>
  </div>
`;

      // Bắt sự kiện click Ẩn/Hiện đáp án
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
