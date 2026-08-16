const BRAND = {
  deepBlue: "#0a2342",
  deepOrange: "#d99d21",
  paleBlue: "#ebf4ff",
  mainWhite: "#ffffff",
  paleWhite: "#eef2f5",
  lightGray: "#5c5a5a",
};

interface ContactInquiry {
  fullname: string;
  email: string;
  phone?: string;
  message: string;
}

export function contactEmailTemplate(inquiry: ContactInquiry) {
  const { fullname, email, phone, message } = inquiry;

  const field = (label: string, value: string) => `
    <tr>
      <td class="field" style="padding: 0 0 20px 0;">
        <p class="label" style="margin: 0 0 6px 0; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: ${BRAND.lightGray};">${label}</p>
        <p style="margin: 0; font-size: 16px; font-weight: 500; color: #1a1a1a;">${value}</p>
      </td>
    </tr>`;

  return `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="color-scheme" content="light">
        <meta name="supported-color-schemes" content="light">
        <title>New Contact Inquiry — Navis Marine Services Ltd</title>
        <!--[if mso]>
          <noscript>
            <xml>
              <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          </noscript>
        <![endif]-->
        <style>
          @media only screen and (max-width: 620px) {
            .container { width: 100% !important; }
            .padding { padding-left: 24px !important; padding-right: 24px !important; }
            .header-padding { padding: 32px 24px !important; }
            .content-padding { padding: 32px 24px !important; }
            .footer-padding { padding: 28px 24px !important; }
            .title { font-size: 22px !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: ${BRAND.paleWhite}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: ${BRAND.paleWhite};">
          <tr>
            <td align="center" style="padding: 32px 16px;">
              <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width: 600px; max-width: 600px; margin: 0 auto; background-color: ${BRAND.mainWhite}; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                <!-- Header -->
                <tr>
                  <td class="header-padding" style="padding: 40px 40px 32px 40px; background-color: ${BRAND.deepBlue}; text-align: center;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="text-align: center;">
                      <tr>
                        <td align="center" style="padding-bottom: 16px;">
                          <span style="font-size: 26px; font-weight: 800; letter-spacing: 0.04em; color: ${BRAND.mainWhite};">NAVIS<span style="color: ${BRAND.deepOrange};">.</span></span>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <span style="font-size: 11px; font-weight: 600; letter-spacing: 0.28em; text-transform: uppercase; color: rgba(255,255,255,0.7);">Marine Services Ltd</span>
                        </td>
                      </tr>
                    </table>
                    <p class="title" style="margin: 24px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -0.02em; color: ${BRAND.mainWhite};">New Contact Inquiry</p>
                  </td>
                </tr>
                <!-- Orange accent bar -->
                <tr>
                  <td style="height: 4px; background-color: ${BRAND.deepOrange}; font-size: 0; line-height: 0;">&nbsp;</td>
                </tr>
                <!-- Content -->
                <tr>
                  <td class="content-padding" style="padding: 40px;">
                    <p style="margin: 0 0 28px 0; font-size: 16px; line-height: 1.6; color: ${BRAND.lightGray};">A new message has been received through the Navis Marine Services Ltd website contact form.</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      ${field("Sender Name", fullname)}
                      ${field("Email Address", email)}
                      ${phone ? field("Phone Number", phone) : ""}
                    </table>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding: 0;">
                          <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: ${BRAND.lightGray};">The Message</p>
                          <div style="background-color: ${BRAND.paleBlue}; border-radius: 12px; padding: 24px; font-size: 16px; line-height: 1.6; color: #1a1a1a; white-space: pre-wrap;">${message}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td class="footer-padding" style="padding: 30px 40px; background-color: ${BRAND.deepBlue}; text-align: center;">
                    <p style="margin: 0 0 8px 0; font-size: 12px; color: rgba(255,255,255,0.7);">Navis Marine Services Ltd — Lagos, Nigeria</p>
                    <p style="margin: 0; font-size: 11px; color: rgba(255,255,255,0.45);">© ${new Date().getFullYear()} Navis Marine Services Ltd. All rights reserved.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}