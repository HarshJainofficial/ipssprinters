/* This is for EmailJs */
function SendMail() {
  var params = {
    name: document.getElementById("name").value,
    message: document.getElementById("message").value,
    number: document.getElementById("number").value,
  }
  emailjs.send("service_h1vk5dq", "template_u3mibxe", params).then(function (res) {
    alert("Success! " + res.status);

  })

}

