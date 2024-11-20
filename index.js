/**
 *  Validate inputs and set errors on inputs if validation fails
 *
 *  @param {RecordInstance} name
 *  @param {RecordInstance} email
 *
 *  name and email are of type ftd.string-field which is defined as:
 *
 *  -- record string-field:
 *  caption key:
 *  optional string $value:
 *  optional string $error:
 */
function validate(name, email) {
    // clear any previous errors
    name.set("error", "");
    email.set("error", "");

    const nameVal = name.get("value").get();
    const emailVal = email.get("value").get();

    validateEmpty(name, nameVal);
    validateEmpty(email, emailVal);

    validateEmail(email, emailVal);
}

function validateAndSet(field, value) {
    const key = field.get("name").get();

    field.set("error", "");
    field.set("value", value);

    switch (key) {
        case "name": { validateEmpty(field, value) } break;
        case "email": {
            validateEmail(field, value);
            validateEmpty(field, value);
        } break;
        default: { console.error("Invalid field passed"); };
    }
}

function validateEmpty(field, value) {
    if (value === "") {
        field.set("error", `${field.get("name").get()} is required`);
    }
}

function validateEmail(field, value) {
    if (!value.includes("@")) {
        field.set("error", "Email must contain '@'");
    }
}
