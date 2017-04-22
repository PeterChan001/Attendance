create database attendance character set utf8;

/* 院系表 */
create table department
(
	department_id int auto_increment,
	department_name nvarchar(10) not null,

	primary key(department_id)
);
insert into department (department_name) values ('信息工程系');

/* 班级表 */
create table class
(
	class_id int auto_increment,
	class_name nvarchar(10) not null,
	department_id int not null,

	primary key(class_id),
	foreign key (department_id) references department(department_id)
);
insert into class (class_name, department_id) values ('15计科1班', 1);

/* 学生表 */
create table student
(
	student_id nchar(9),
	student_name nvarchar(10) not null,
	phone_id nchar(15),
	class_id int not null,

	primary key(student_id),
	unique(phone_id),
	foreign key (class_id) references class (class_id)
);

/* 课程表 */
create table course
(
	course_id int auto_increment,
	course_name nvarchar(10) not null,
	course_week bit not null,
	course_start datetime not null,
	course_end datetime not null,
	class_id int not null,
	romm_id int not null,
	teacher_id int not null,

	primary key(course_id),
	foreign key (class_id) references class (class_id),
	foreign key (room_id) references room (room_id),
	foreign key (teacher_id) references teacher (teacher_id)
);

/* 教室表 */
create table room
(
	room_id int auto_increment,
	room_name nvarchar(10) not null,
	room_longitude decimal(10, 7) not null,
	room_latitude decimal(10, 7) not null,

	primary key(room_id)
);

/* 签到表 */
create table attend
(
	attend_id int auto_increment,
	attend_status bit not null,
	attend_time datetime not null,
	course_id int not null,
	student_id int not null,

	primary key(attend_id),
	foreign key (course_id) references class (course_id),
	foreign key (student_id) references class (student_id)
);

/* 教室表 */
create table teacher
(
	teacher_id int auto_increment,
	teacher_name nvarchar(10) not null,

	primary key(teacher_id)
);