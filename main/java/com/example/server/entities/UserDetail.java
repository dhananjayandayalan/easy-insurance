package com.example.server.entities;

import javax.persistence.*;
import java.math.BigInteger;

public class UserDetail {
    @Entity
    public class UserDetail {

        @Id
        @SequenceGenerator(
                name = "SignUp_Sequence",
                sequenceName = "SignUp_Sequence",
                allocationSize = 1
        )
        @GeneratedValue(
                strategy = GenerationType.SEQUENCE,
                generator = "SignUp_Sequence"
        )
        private long u_id;

        private String u_name;

        private String u_email;

        private String u_password;

        private BigInteger phone;



        //default constructor
        public UserDetail() {
            super();
        }


        //params constructor


        public UserDetail(long u_id, String u_name, String u_email, String u_password, BigInteger phone) {
            this.u_id = u_id;
            this.u_name = u_name;
            this.u_email = u_email;
            this.u_password = u_password;
            this.phone = phone;
        }

        public long getU_id() {
            return u_id;
        }

        public void setU_id(long u_id) {
            this.u_id = u_id;
        }

        public String getU_name() {
            return u_name;
        }

        public void setU_name(String u_name) {
            this.u_name = u_name;
        }

        public String getU_email() {
            return u_email;
        }

        public void setU_email(String u_email) {
            this.u_email = u_email;
        }

        public String getU_password() {
            return u_password;
        }

        public void setU_password(String u_password) {
            this.u_password = u_password;
        }

        public BigInteger getPhone() {
            return phone;
        }

        public void setPhone(BigInteger phone) {
            this.phone = phone;
        }

        @Override
        public String toString() {
            return "SignUp{" +
                    "u_id=" + u_id +
                    ", u_name='" + u_name + '\'' +
                    ", u_email='" + u_email + '\'' +
                    ", u_password='" + u_password + '\'' +
                    '}';
        }
    }

}
