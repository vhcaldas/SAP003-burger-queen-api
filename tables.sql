create table command(
id SERIAL primary key,
id_menuItens integer not null,
desk integer not null,
initTime timestamp not null,
endTime timestamp not null,
status char(30) not null,
totalPrice decimal(5,2) not null,
foreign key (id_menuItens) references menuItens(id)
);

create table menuItens(
id SERIAL primary key,
item char(25) not null,
price integer not null,
isExtras boolean null,
hasOptions char(25) not null,
breakfast boolean not null
);

create table selectedItens(
id SERIAL primary key,
id_menuItens integer not null,
id_extras integer not null, 
quantity integer not null,
options char(10) not null,
foreign key (id_menuItens) references menuItens(id),
foreign key (id_extras) references menuItens(id)
);