const messageType = sessionStorage.getItem('messageType');
const messageContent = sessionStorage.getItem('messageContent');

export const showModal = () => {
  $('#modalTitle').text(messageType);
  $('#modalContent').text(messageContent);
  if (messageType === '오류 메시지') $('.modal-header').addClass('bg-warning');
  else $('.modal-header').addClass('bg-success');
  $('#modal').modal('show');
  sessionStorage.removeItem('messageType');
  sessionStorage.removeItem('messageContent');
};

export const checkErrorSession = () => {
  if (messageType || messageContent) return true;
  return false;
};
