package com.northmarket.calendar.repository;

import com.northmarket.calendar.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}