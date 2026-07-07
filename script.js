// Mobile nav toggle is inline via onclick in each page.

// Contact form: build a mailto link from the fields so the form
// works with zero backend. Replace this with a real form service
// (Formspree, Google Forms, etc.) when you're ready to collect
// submissions automatically.
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('interestForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var phone = form.phone.value.trim();
    var role = form.role.value;
    var org = form.org.value.trim();
    var message = form.message.value.trim();

    var subject = encodeURIComponent('LiftUp Youth interest form — ' + name);
    var bodyLines = [
      'Name: ' + name,
      'Email: ' + email,
      'Phone: ' + (phone || '—'),
      'Role: ' + role,
      'School/org: ' + (org || '—'),
      '',
      'Message:',
      message || '—'
    ];
    var body = encodeURIComponent(bodyLines.join('\n'));

    window.location.href = 'mailto:hello@liftupyouth.org?subject=' + subject + '&body=' + body;
  });
});
