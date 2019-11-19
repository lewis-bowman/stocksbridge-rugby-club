$('#sendMessage').on('submit', function(e){
    $('#message-sent').modal('show');
    e.preventDefault();
  });