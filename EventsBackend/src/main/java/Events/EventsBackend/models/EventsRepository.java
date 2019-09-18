package Events.EventsBackend.models;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import Events.EventsBackend.models.EventsParams;
 
 
public interface EventsRepository extends MongoRepository<EventsParams, String>{
	
	public List<EventsParams> findAll();
}
