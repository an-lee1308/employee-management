package com.example.demo.repository;

import com.example.demo.model.EmployeeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeModel, Integer> {

    public List<EmployeeModel> findByFullName(String fullName);

    @Query(value = "SELECT * from employee  where team_id=?1", nativeQuery = true)
    List<EmployeeModel> findEmployeeInTeam(int id);
//        @Query("SELECT u FROM User u WHERE u.def = :def")
//        public List<EmployeeModel> findUserByDefQuery(@Param("def") Integer def);

//    public interface UserRepository extends JpaRepository<User, Long> {
//
//        // Khi được gắn @Query, thì tên của method không còn tác dụng nữa
//        // Đây là JPQL
//        @Query("select u from User u where u.emailAddress = ?1")
//        User myCustomQuery(String emailAddress);
//
//        // Đây là Native SQL
//        @Query(value = "select * from User u where u.email_address = ?1", nativeQuery = true)
//        User myCustomQuery2(String emailAddress);
//    }

    //        List<User> findAllByAtk(int atk);
//
//        List<User> findAllByAgiBetween(int start, int end);
//
//        @Query("SELECT u FROM User u WHERE u.def = :def")
//        User findUserByDefQuery(@Param("def") Integer def);
//
//        List<User> findAllByAgiGreaterThan(int agiThreshold);
}
