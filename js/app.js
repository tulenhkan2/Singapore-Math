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

// 2. Lắng nghe khi chọn Dạng Toán
topicSelect.addEventListener('change', (e) => {
  const selectedGrade = gradeSelect.value;
  const topicIndex = e.target.value;
  exerciseList.innerHTML = '';

  if (topicIndex !== "") {
    const selectedTopic = mathData[selectedGrade].topics[topicIndex];
    
    // Tiêu đề dạng toán
    const title = document.createElement('h3');
    title.textContent = selectedTopic.name;
    exerciseList.appendChild(title);

    // Hiển thị danh sách câu hỏi
    selectedTopic.questions.forEach((q) => {
      const item = document.createElement('div');
      item.style.marginBottom = '10px';
      item.innerHTML = `<strong>${q.content}</strong>`;
      exerciseList.appendChild(item);
    });
  }
});
