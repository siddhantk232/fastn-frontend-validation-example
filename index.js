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

    if (nameVal === "") {
        name.set("error", "Name is required");
    }

    if (emailVal === "") {
        email.set("error", "Email is required");
    }

    if (!emailVal.includes("@")) {
        email.set("error", "Email must contain '@'");
    }
}
