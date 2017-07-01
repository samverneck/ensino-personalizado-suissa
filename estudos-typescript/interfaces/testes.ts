/// <reference path="ISubscriber" />
/// <reference path="IStudent" />
/// <reference path="Student" />

module tsbr {
    function run(student: IStudent) {
        student.register();
    }

    var student = new Student('Samuel', 'samuel@samuel.com', true, 19);
    run(student);
}
