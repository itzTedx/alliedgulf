import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await mail.send({
      to: "melwinafs@gmail.com", // Your email where you'll receive emails
      from: "online@alliedgulf.me", // your website email address here
      subject: `New Mail from ${req.body.email} - alliedgulf.me`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
          <meta charset="utf-8" />
      
          <title>You've got a new mail [alliedgulf.me]</title>
          <meta name="description" content="New Mail from alliedgulf.me" />
          <meta name="author" content="Dreampixels" />
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>
      
        <body style="margin: 0; padding: 0; background-color: #d4e1e7">
          <div
            style="
              display: flex;
              font-size: 38px;
              justify-content: center;
              align-items: center;
              background-color: #1a6ea6;
              padding: 20px;
              color: #e2e2e2;
              font-family: Tahoma;
              font-weight: 700;
            "
          >
            Allied Gulf Construction Services
          </div>
          <div
            class="container"
            style="font-family: arial; margin-left: 20px; margin-right: 20px"
          >
            <h2 style="padding-bottom: 12px">You've got a new mail</h2>
            <h3 style="font-weight: 400; font-size: 16px">
              Name: ${req.body.name},<br />
              Email: ${req.body.email},<br />
              Contact No: ${req.body.contact},<br />
              Company Name: ${req.body.company}<br />
            </h3>
            <div style="font-size: 18px">
              <p style="font-weight: 600">Project Details:</p>
              <p>${req.body.message}</p>
              <br />
            </div>
          </div>
          <div
            style="
              display: flex;
              font-size: 10px;
              justify-content: center;
              align-items: center;
              background-color: #2f2f2f;
              padding: 12px;
              color: #e2e2e2;
              font-family: Tahoma;
              font-weight: 300;
            "
          >
            Mail from
            <a
              href="https://www.alliedgulf.me"
              onmouseover="this.style.color='#7BCAF6'"
              onmouseleave="this.style.color='white'"
              style="color: white; text-decoration: none; padding-left: 3px"
            >
              Alliedgulf.me</a
            >
          </div>
          <div
            style="
              display: flex;
              font-size: 8px;
              justify-content: center;
              align-items: center;
              background-color: #e2e2e2;
              padding: 8px;
              color: #2f2f2f;
              font-family: Tahoma;
              font-weight: 300;
            "
          >
            Dreampixels
          </div>
        </body>
      </html>
      `,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
